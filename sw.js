// Qo‘l Sehri — offline support.
// App files: network-first (updates show up immediately), cache as fallback.
// Libraries & AI models (CDN): cache-first — downloaded once, then work offline.
const CACHE = 'qol-sehri-v2';
const CDN = ['cdn.jsdelivr.net', 'storage.googleapis.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html', './manifest.webmanifest', './icon.svg', './sehr.html']).catch(() => {}))); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (CDN.includes(url.hostname)) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req); if (hit) return hit;
      const res = await fetch(req); if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res;
    }));
  } else if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  }
});
