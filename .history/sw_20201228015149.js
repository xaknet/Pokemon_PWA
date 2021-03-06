const CACHE_DATA = "offline-data";
const STATIC_RESOURCES = ["index.html", "app.js", "logo.png"];


// Install SW
self.addEventListener("install", async (e) => {
  console.log("SW install");

  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_DATA);
      return await cache.
    })
  )
});

// Listen for fetching request
self.addEventListener("fetch", async (e) => {
  console.log(`SW fetch: ${e.request.url}`);
});

// Activate the SW
self.addEventListener("activate", async (e) => {
  console.log("SW activate");
});

