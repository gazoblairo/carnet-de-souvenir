(function(window) {
  let channel = null;

  async function subscribeToConversation(conversationCode, callback) {
    if (!window.supabaseClient || !conversationCode || typeof callback !== 'function') return;

    if (channel) {
      await channel.unsubscribe();
      channel = null;
    }

    channel = window.supabaseClient
      .channel(`messages:${conversationCode}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'messages',
        filter: `conversation_code=eq.${conversationCode}`
      }, (payload) => {
        callback(payload);
      });

    await channel.subscribe();
  }

  async function unsubscribe() {
    if (!channel) return;
    await channel.unsubscribe();
    channel = null;
  }

  window.RealtimeModule = {
    subscribeToConversation,
    unsubscribe
  };
})(window);
