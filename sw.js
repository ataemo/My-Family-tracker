// Service Worker ພື້ນຖານ - ຈຳເປັນເພື່ອໃຫ້ Chrome/Android ຮັບຮູ້ວ່າເປັນ PWA ທີ່ຕິດຕັ້ງໄດ້
const CACHE_NAME = 'family-tracker-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Pass-through fetch (ບໍ່ cache ຫຍັງພິເສດ, ພຽງແຕ່ໃຫ້ມີ fetch handler ຕາມເງື່ອນໄຂ PWA)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
