const CACHE_NAME = "dolphin-cache-v2";
const STATIC_ASSETS = [
  "/index.html",
  "/pages/login.html",
  "/pages/profile.html",
  "/pages/license.html",
  "/pages/results.html",
  "/pages/scan.html",
  "/pages/success.html",
  "/pages/transaction.html",
  "/assets/style-neon.css",
  "/assets/wallets.js",
  "/js/login-api.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((c) => c.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
    Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)))
  ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const netRes = await fetch(req);
        if (netRes && netRes.ok) {
          caches.open(CACHE_NAME).then(c => c.put(req, netRes.clone()));
        }
        return netRes;
      } catch {
        const cached = await caches.match(req);
        if (cached) return cached;
        return caches.match("/index.html");
      }
    })());
    return;
  }

  event.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((netRes) => {
        if (netRes && netRes.ok && req.method === "GET" && netRes.type !== "opaqueredirect") {
          caches.open(CACHE_NAME).then(c => c.put(req, netRes.clone()));
        }
        return netRes;
      });
    })
  );
});
