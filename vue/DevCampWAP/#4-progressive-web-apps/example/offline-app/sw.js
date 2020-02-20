var CACHE_NAME = 'sw-demo-1';
var caches_files = [
    '/',
    '/images/iu.jpg',
    'dist/bundle.js'
]


self.addEventListener('install', function (event) {
    // 캐시 등록 또는 기타 로직 수행
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('cache is worked');
            return cache.addAll(caches_files);
        })
        .catch(function (err) {
            console.error(err);
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
            .catch(function(err) {
                console.log(err, 'ERROR : fetching the resource error')
            })
    )
});

self.addEventListener('activated', function (event) {
    evnet.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheName.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
