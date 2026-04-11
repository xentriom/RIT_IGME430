https://developer.chrome.com/docs/workbox/service-worker-lifecycle#the_lifecycle_of_a_new_service_worker
const cacheKey = "Chitter_v3";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheKey).then((cache) => {
      // Add all static assets to the cache
      return cache.addAll([
        "/assets/icons/android-icon-192x192.png",
        "/assets/icons/android-icon-512x512.png",
        "/assets/icons/apple-icon-180x180.png",
        "/assets/icons/favicon-16x16.png",
        "/assets/icons/favicon-32x32.png",
        "/assets/icons/favicon.ico",
        "/assets/manifest.json",
      ]);
    }),
  );
});

self.addEventListener("activate", (event) => {
  const cacheAllowList = [cacheKey];

  // Get all the currently active `Cache` instances.
  event.waitUntil(
    caches.keys().then((keys) => {
      // Delete all caches that aren't in the allow list:
      return Promise.all(
        keys.map((key) => {
          if (!cacheAllowList.includes(key)) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
