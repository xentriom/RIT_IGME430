const cacheKey = "Chitter_v3";
(self.addEventListener("install", (s) => {
  s.waitUntil(
    caches
      .open(cacheKey)
      .then((s) =>
        s.addAll([
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
  self.addEventListener("activate", (s) => {
    const e = [cacheKey];
    s.waitUntil(
      caches.keys().then((s) =>
        Promise.all(
          s.map((s) => {
            if (!e.includes(s)) return caches.delete(s);
          }),
        ),
      ),
    );
  }));
