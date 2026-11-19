const CACHE_NAME = "armstrong-cv-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./qualifications.html",
    "./interest.html",
    "./demos.html",
    "./cssdemo.html",
    "./basestyle.css",
    "./install.js",
    "./style-switcher.js",
    "./jsdemo.js",
    "./jsdemo.html",
    "./manifest.json",
    "./images/profile-photo.jpg",
    "./images/star.jpg",
    "./icons/web-app-manifest-512x512.png",
    "./icons/web-app-manifest-192x192.png",
    "./icons/maskable_icon_x192.png",
    "./icons/screenshot1.png",
    "./icons/screenshot2.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});