/* AI Lab Pro — service worker (cache shell, network for APIs) */
const CACHE_VERSION = 'ailab-ui-v1.5.4';
const SHELL = [
  './',
  './index.html',
  './main.html',
  './css/style.css',
  './js/app.js',
  './img/logo.png',
  './icon.svg',
  './favicon.ico',
  './icon.png',
  './apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './site.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(SHELL).catch(() => undefined))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

function isDynamic(url) {
  return (
    url.pathname.includes('/api/models') ||
    url.pathname.includes('/v1/models') ||
    url.origin !== self.location.origin
  );
}

self.addEventListener('fetch', (event) => {
  const {request} = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (isDynamic(url)) {
    event.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((res) => {
          if (res && res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    }),
  );
});
