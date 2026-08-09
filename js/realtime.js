(function(window) {
  let channel = null;

  async function subscribeToConversation(conversationCode, callback) {
    if (!window.supabaseClient || !conversationCode || typeof callback !== 'function') {
      console.error('❌ subscribeToConversation: Missing client, code, or callback');
      return;
    }

    // Unsubscribe from previous channel if exists
    if (channel) {
      try {
        await channel.unsubscribe();
        console.log('📡 Previous Realtime channel unsubscribed');
      } catch (error) {
        console.warn('⚠️  Error unsubscribing from previous channel:', error);
      }
      channel = null;
    }

    console.log('📡 Subscribing to Realtime:', conversationCode);
    channel = window.supabaseClient
      .channel(`messages:${conversationCode}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'messages',
        filter: `conversation_code=eq.${conversationCode}`
      }, (payload) => {
        console.log('📨 Realtime message received:', {
          event: payload.eventType,
          conversationCode: conversationCode,
          messageId: payload.new?.id
        });
        callback(payload);
      });

    await channel.subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log('✅ Realtime subscribed to:', conversationCode);
      } else if (status === 'CHANNEL_ERROR') {
        console.error('❌ Realtime channel error for:', conversationCode);
      } else if (status === 'TIMED_OUT') {
        console.error('❌ Realtime connection timed out for:', conversationCode);
      }
    });
  }

  async function unsubscribe() {
    if (!channel) return;
    try {
      await channel.unsubscribe();
      console.log('✅ Realtime unsubscribed');
    } catch (error) {
      console.error('❌ Unsubscribe error:', error);
    }
    channel = null;
  }

  // Cleanup on page unload
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      if (channel) {
        unsubscribe().catch(e => console.warn('Cleanup unsubscribe warning:', e));
      }
    });
  }

  window.RealtimeModule = {
    subscribeToConversation,
    unsubscribe
  };
})(window);
