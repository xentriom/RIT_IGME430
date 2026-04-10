const cacheKey = "Chitter_v1";
(self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheKey)
      .then((e) =>
        e.addAll([
          "/assets/icons/android-icon-192x192.png",
          "/assets/icons/android-icon-512x512.png",
          "/assets/icons/apple-icon-180x180.png",
          "/assets/icons/favicon-16x16.png",
          "/assets/icons/favicon-32x32.png",
          "/assets/icons/favicon.ico",
          "/assets/manifest.json",
        ]),
      ),
  );
}),
  self.addEventListener("activate", (e) => {
    const n = [cacheKey];
    e.waitUntil(
      caches.keys().then((e) =>
        Promise.all(
          e.map((e) => {
            if (!n.includes(e)) return caches.delete(e);
          }),
        ),
      ),
    );
  }),
  self.addEventListener("fetch", (e) => {
    const { request: n } = e;
    "GET" === n.method &&
      new URL(n.url).origin === self.location.origin &&
      e.respondWith(
        caches.open(cacheKey).then(async (e) =>
          e.match(n).then((s) => {
            const t = fetch(n).then((s) => (e.put(n, s.clone()), s));
            return s || t;
          }),
        ),
      );
  }));
