var cacheName = 'f2024_r4f';

var filesToCache = [
  'css/bootstrap.min.css',
  'css/bootstrap.min.css.map',
  'css/custom.css',
  'images/main-visual.png',
  'js/bootstrap.bundle.min.js',
  'js/bootstrap.bundle.min.js.map',
  'js/chart.js',
  'js/radio.js',
  'js/redirect.js',
  'js/result.js',
  'js/scores.js',
  'js/session-storage-clear.js',
  'android-chrome-256x256.png',
  'apple-touch-icon.png',
  'icon-512x512.png',
  'icon-192x192.png',
  'favicon.ico',
  'index.html',
  'q01.html',
  'q02.html',
  'q03.html',
  'q04.html',
  'q05.html',
  'q06.html',
  'q07.html',
  'q08.html',
  'q09.html',
  'result.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
