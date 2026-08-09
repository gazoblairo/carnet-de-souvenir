(function(window) {
  const state = {
    conversationCode: null,
    myCode: null,
    partnerCode: null,
    messages: [],
    ready: false,
    listeners: []
  };

  function createConversationCode(codeA, codeB) {
    if (!codeA || !codeB) return null;
    return [codeA.trim().toUpperCase(), codeB.trim().toUpperCase()].sort().join('::');
  }

  function notifyListeners() {
    const snapshot = state.messages.slice();
    state.listeners.forEach(cb => {
      try { cb(snapshot); } catch (error) { console.warn('MessageModule listener error', error); }
    });
  }

  function getPairingState() {
    return typeof window.getPairingState === 'function' ? window.getPairingState() : null;
  }

  function mapDbRowToMessage(row = {}) {
    const senderCode = row.sender_code || row.sender || null;
    const createdAt = row.created_at ? new Date(row.created_at).getTime() : Date.now();
    return window.normalizeMessage({
      id: row.id || row.message_id || `${createdAt}-${Math.random().toString(36).slice(2, 8)}`,
      sender: senderCode === state.myCode ? 'me' : 'partner',
      text: row.text || row.content || row.body || '',
      type: row.type || 'text',
      createdAt,
      time: row.time || new Date(createdAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      status: row.status || (senderCode === state.myCode ? 'sent' : 'delivered'),
      reactions: row.reactions || row.metadata?.reactions || {},
      pinned: !!row.pinned,
      favorite: !!row.favorite,
      edited: !!row.edited,
      replyTo: row.reply_to || row.replyTo || null,
      deletedForMe: !!row.deleted_for_me || !!row.deletedForMe,
      deletedForEveryone: !!row.deleted_for_everyone || !!row.deletedForEveryone,
      metadata: row.metadata || {},
      author: senderCode === state.myCode ? 'Vous' : 'Votre moitié'
    });
  }

  function buildDbMessage(message) {
    const senderCode = message.sender === 'partner' ? state.partnerCode : state.myCode;
    const messageRow = {
      conversation_code: state.conversationCode,
      sender_code: senderCode,
      text: message.text || '',
      type: message.type || 'text',
      status: message.status || 'sent',
      created_at: new Date(message.createdAt).toISOString(),
      reply_to: message.replyTo || null,
      metadata: message.metadata || null,
      reactions: message.reactions || null,
      pinned: message.pinned || false,
      favorite: message.favorite || false,
      edited: message.edited || false,
      deleted_for_me: message.deletedForMe || false,
      deleted_for_everyone: message.deletedForEveryone || false
    };

    Object.keys(messageRow).forEach(key => {
      if (messageRow[key] === null || messageRow[key] === undefined) {
        delete messageRow[key];
      }
    });

    return messageRow;
  }

  async function ensureConversation() {
    if (!window.supabaseClient || !state.conversationCode) {
      console.error('❌ ensureConversation: Supabase client or conversation code missing');
      return null;
    }

    const { data: existing, error: selectError } = await window.supabaseClient
      .from('conversations')
      .select('*')
      .eq('code', state.conversationCode)
      .limit(1)
      .maybeSingle();

    if (selectError) {
      console.error('❌ Supabase select conversation error:', selectError.message);
      return null;
    }

    if (existing) {
      console.log('✅ Conversation found:', state.conversationCode);
      return existing;
    }

    console.log('📝 Creating new conversation:', state.conversationCode);
    const insertRow = { code: state.conversationCode };
    if (Array.isArray([state.myCode, state.partnerCode])) {
      insertRow.participant_codes = [state.myCode, state.partnerCode];
    }

    const { data, error: insertError } = await window.supabaseClient
      .from('conversations')
      .insert(insertRow)
      .select()
      .single();

    if (insertError) {
      console.error('❌ Supabase create conversation error:', insertError.message);
      return null;
    }

    console.log('✅ Conversation created successfully');
    return data || existing || null;
  }

  async function loadMessages() {
    if (!window.supabaseClient || !state.conversationCode) {
      console.warn('⚠️  loadMessages: Supabase client or conversation code missing');
      state.messages = [];
      state.ready = true;
      notifyListeners();
      return;
    }

    console.log('📥 Loading messages for conversation:', state.conversationCode);
    const { data, error } = await window.supabaseClient
      .from('messages')
      .select('*')
      .eq('conversation_code', state.conversationCode)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('❌ Supabase load messages error:', error.message);
      state.messages = [];
      state.ready = true;
      notifyListeners();
      return;
    }

    state.messages = (data || []).map(mapDbRowToMessage);
    console.log(`✅ Loaded ${state.messages.length} messages`);
    state.ready = true;
    notifyListeners();
    await markPartnerMessagesRead();
  }

  async function handleRealtimeEvent(payload) {
    const row = payload?.new;
    if (!row || row.conversation_code !== state.conversationCode) return;
    const message = mapDbRowToMessage(row);
    const exists = state.messages.some(item => item.id === message.id);
    if (exists) return;
    state.messages.push(message);
    state.messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    notifyListeners();
    await markPartnerMessagesRead();
  }

  async function subscribeRealtime() {
    if (!window.RealtimeModule || !state.conversationCode) {
      console.warn('⚠️  subscribeRealtime: RealtimeModule or conversation code missing');
      return;
    }
    console.log('📡 Subscribing to Realtime for conversation:', state.conversationCode);
    await window.RealtimeModule.subscribeToConversation(state.conversationCode, handleRealtimeEvent);
  }

  async function markPartnerMessagesRead() {
    if (!window.supabaseClient || !state.myCode) return;

    const unread = state.messages
      .filter(message => message.sender === 'partner' && message.status !== 'read')
      .map(message => message.id)
      .filter(Boolean);

    if (unread.length === 0) return;

    const { error } = await window.supabaseClient
      .from('messages')
      .update({ status: 'read' })
      .in('id', unread);

    if (error) {
      console.warn('Supabase mark messages read error', error.message);
      return;
    }

    state.messages = state.messages.map(message => {
      if (unread.includes(message.id)) {
        return { ...message, status: 'read' };
      }
      return message;
    });

    notifyListeners();
  }

  async function sendTextMessage(text, replyId = null) {
    if (!text || !window.supabaseClient || !state.conversationCode) {
      const err = 'MessageModule is not ready or missing conversation.';
      console.error('❌', err);
      throw new Error(err);
    }

    console.log('📤 Sending message to conversation:', state.conversationCode);
    const createdAt = Date.now();
    const message = window.createMessagePayload(text, 'text', null, replyId);
    message.createdAt = createdAt;
    message.status = 'sent';

    const row = buildDbMessage(message);
    const { data, error } = await window.supabaseClient
      .from('messages')
      .insert(row)
      .select()
      .single();

    if (error) {
      console.error('❌ Supabase insert message error:', error.message);
      throw error;
    }

    const savedMessage = mapDbRowToMessage(data || row);
    const existingIndex = state.messages.findIndex(item => item.id === savedMessage.id);
    if (existingIndex >= 0) {
      state.messages[existingIndex] = savedMessage;
    } else {
      state.messages.push(savedMessage);
      state.messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    console.log('✅ Message sent successfully');
    notifyListeners();
    return savedMessage;
  }

  async function updateMessage(messageId, updates) {
    if (!messageId || !window.supabaseClient) return null;
    const message = state.messages.find(item => item.id === messageId);
    if (!message) return null;

    const next = { ...message, ...updates };
    const row = buildDbMessage(next);

    const { error } = await window.supabaseClient
      .from('messages')
      .update(row)
      .eq('id', messageId);

    if (error) {
      console.warn('Supabase update message error', error.message);
      return null;
    }

    state.messages = state.messages.map(item => item.id === messageId ? { ...item, ...updates } : item);
    notifyListeners();
    return next;
  }

  async function addReaction(messageId, reaction) {
    const message = state.messages.find(item => item.id === messageId);
    if (!message || !window.supabaseClient) return null;

    const reactions = { ...(message.reactions || {}) };
    reactions[reaction] = (reactions[reaction] || 0) + 1;

    return updateMessage(messageId, { reactions });
  }

  async function deleteMessage(messageId, forEveryone = false) {
    if (!messageId || !window.supabaseClient) return null;
    const message = state.messages.find(item => item.id === messageId);
    if (!message) return null;

    const updates = forEveryone
      ? { deletedForEveryone: true }
      : { deletedForMe: true };

    return updateMessage(messageId, updates);
  }

  async function importMessages(messages) {
    if (!Array.isArray(messages) || !window.supabaseClient) return;
    const validMessages = messages.map(message => normalizeMessage({
      ...message,
      sender: message.sender || (message.author === 'Vous' ? 'me' : 'partner'),
      createdAt: message.createdAt || message.date || Date.now()
    }));

    const rows = validMessages.map(buildDbMessage);
    const { error } = await window.supabaseClient.from('messages').insert(rows);
    if (error) {
      console.warn('Supabase import messages error', error.message);
      return;
    }

    await loadMessages();
  }

  function getMessages() {
    return state.messages.slice();
  }

  function getMessage(messageId) {
    return state.messages.find(item => item.id === messageId) || null;
  }

  function onMessagesUpdated(callback) {
    if (typeof callback === 'function') {
      state.listeners.push(callback);
    }
  }

  async function initialize() {
    const pairing = getPairingState();
    if (!pairing || !pairing.linked || !pairing.partnerCode) {
      console.warn('⚠️  MessageModule: Pairing not linked. Waiting for pairing...');
      state.messages = [];
      state.ready = true;
      notifyListeners();
      return;
    }

    state.myCode = pairing.myCode;
    state.partnerCode = pairing.partnerCode;
    state.conversationCode = createConversationCode(state.myCode, state.partnerCode);

    console.log('🔗 MessageModule initialized:');
    console.log('  - My Code:', state.myCode);
    console.log('  - Partner Code:', state.partnerCode);
    console.log('  - Conversation Code:', state.conversationCode);

    try {
      await ensureConversation();
      await loadMessages();
      await subscribeRealtime();
      console.log('✅ MessageModule ready for messaging');
    } catch (error) {
      console.error('❌ MessageModule initialization failed:', error);
      state.ready = true;
      notifyListeners();
    }
  }

  window.MessageModule = {
    initialize,
    sendTextMessage,
    updateMessage,
    addReaction,
    deleteMessage,
    getMessages,
    getMessage,
    onMessagesUpdated,
    importMessages,
    getState: () => ({ ...state })
  };
})(window);
