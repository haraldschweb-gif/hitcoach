// HIT Coach Service Worker – macht die App vollständig offline-fähig
const CACHE = 'hitcoach-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png'
];

// Installation: App-Hülle in den Cache legen
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Aktivierung: alte Caches aufräumen
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Abruf: Cache zuerst, Netz als Fallback (auch Google Fonts werden
// beim ersten Online-Besuch gecacht und sind danach offline verfügbar)
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request)
        .then((resp) => {
          // Erfolgreiche Antworten (auch opaque, z.B. Fonts) nachträglich cachen
          if (resp && (resp.status === 200 || resp.type === 'opaque')) {
            const clone = resp.clone();
            caches.open(CACHE).then((cache) => cache.put(e.request, clone));
          }
          return resp;
        })
        .catch(() => {
          // Offline und nicht im Cache: bei Navigation die App selbst liefern
          if (e.request.mode === 'navigate') return caches.match('./index.html');
        });
    })
  );
});
