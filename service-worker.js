const CACHE_NAME = "dolphin-cache-v1";
const urlsToCache = [
  "/dolphinwalletfinder/pages/login.html",
  "/dolphinwalletfinder/pages/profile.html",
  "/dolphinwalletfinder/pages/license.html",
  "/dolphinwalletfinder/pages/results.html",
  "/dolphinwalletfinder/pages/scan.html",
  "/dolphinwalletfinder/pages/success.html",
  "/dolphinwalletfinder/pages/transaction.html",
  "/dolphinwalletfinder/assets/style-neon.css",
  "/dolphinwalletfinder/assets/wallets.js",
  "/dolphinwalletfinder/js/login-api.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
