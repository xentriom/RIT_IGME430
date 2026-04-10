https://developer.chrome.com/docs/workbox/service-worker-lifecycle#the_lifecycle_of_a_new_service_worker
const cacheKey = "Chitter_v1";

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

/**
 * https://developer.chrome.com/docs/workbox/caching-strategies-overview#stale-while-revalidate
 * Does not cache non-GET reqs or non-origin requests
 */
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(cacheKey).then(async (cache) => {
      return cache.match(request).then((cachedResponse) => {
        const fetchResponse = fetch(request).then((networkResponse) => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
        return cachedResponse || fetchResponse;
      });
    }),
  );
});
