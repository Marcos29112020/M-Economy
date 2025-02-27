const CACHE_NAME = 'm-economy-cache-v1';
const urlsToCache = [
    '/price-compare-app/',
    '/price-compare-app/index.html',
    '/price-compare-app/style.css',
    '/price-compare-app/script.js',
    '/price-compare-app/manifest.json',
    '/price-compare-app/icon.png',
    '/price-compare-app/icon-large.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(err => console.log('Erro ao cachear:', err))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => caches.match('/price-compare-app/index.html'))
    );
});