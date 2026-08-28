// HANYA MENCEGAT FILE STATIS (GAMBAR/CSS), BIARKAN JALUR DATA GOOGLE LEPAS
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return; // Jangan pernah sentuh jalur POST ke server
    }
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});