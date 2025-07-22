const CACHE_NAME = 'luxury-hair-cache-v1';
const urlsToCache = [
  '/',
  'churikov.html',
  'about.html',
  'contacts.html',
  'svyaz.html',
  'styles.css',
  'лого.jpeg',
  'маллет.jpg',
  'шегги.jpg',
  'кроп.jpg',
  'каскад.jpg',
  'каре.jpg',
  'фон1.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});