// Install SW
self.addEventListener("install", async (e) => {
  console.log("SW install");
});

// Listen for fetching request
self.addEventListener("install", async (e) => {
  console.log(`SW fetch: ${e.}`);
});
