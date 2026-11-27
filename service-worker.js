const CACHE_NAME = 'carnet-v85';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css?v=20261127g',
  '/js/i18n.js?v=20261127c',
  '/js/script.js?v=20261127h',
  '/js/app-lock.js?v=20261126f',
  '/js/notifications.js?v=20261126f',
  '/js/visual-customizer.js?v=20261126b',
  '/js/storage-manager.js?v=20261126a',
  '/supabase.js',
  '/js/realtime.js',
  '/js/messages.js',
  '/manifest.json?v=20261127-icon1',
  '/assets/icons/favicon.ico',
  '/assets/icons/favicon-32.png',
  '/assets/icons/apple-touch-icon.png',
  '/assets/icons/app-icon-192.png',
  '/assets/icons/app-icon-512.png',
  '/assets/images/couple.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cached) => {
        const fetchPromise = fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => cached);

        return cached || fetchPromise;
      })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = new URL(event.notification.data?.url || '/', self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      const appClient = clients.find((client) => new URL(client.url).origin === self.location.origin);
      if (appClient) {
        return appClient.navigate(targetUrl).then((navigatedClient) => (navigatedClient || appClient).focus());
      }
      return self.clients.openWindow(targetUrl);
    })
  );
});
