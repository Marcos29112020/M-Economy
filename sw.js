const CACHE_NAME = 'm-economy-cache-v2';
const urlsToCache = [
    '/M-Economy/',
    '/M-Economy/index.html',
    '/M-Economy/style.css',
    '/M-Economy/script.js',
    '/M-Economy/manifest.json',
    '/M-Economy/icon.png',
    '/M-Economy/icon-large.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto, adicionando arquivos...');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
            .catch(err => console.error('Erro ao cachear arquivos:', err))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(networkResponse => {
                    if (!networkResponse || networkResponse.status !== 200) {
                        return caches.match('/M-Economy/index.html');
                    }
                    return networkResponse;
                });
            })
            .catch(() => caches.match('/M-Economy/index.html'))
    );
});