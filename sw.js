// /var/www/html/sw.js
const CACHE_NAME = 'jcal-pwa-v22'; // 버전 올려서 강제 갱신
const CORE_ASSETS = [
  '/',            // 홈
  '/index.html',
  '/app.html',
  '/app.js',
  '/style.css',
  '/widget.html',
  '/manifest.webmanifest',
  '/privacy.html',
  '/contact.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(CORE_ASSETS.map((url) => cache.add(url)));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (url.origin !== self.location.origin) return;

  const accept = req.headers.get('accept') || '';
  const isHTML = req.mode === 'navigate' || accept.includes('text/html');

  // ✅ HTML은 Network First (404/옛버전 캐시 고착 방지)
  if (isHTML) {
    event.respondWith((async () => {
      try {
        const res = await fetch(req);
        // ✅ 200대만 캐시에 저장 (404는 저장 금지)
        if (res && res.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(req, res.clone());
        }
        return res;
      } catch (e) {
        const cached = await caches.match(req);
        if (cached) return cached;

        const home = await caches.match('/index.html') || await caches.match('/');
        return home || new Response('오프라인 상태입니다.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  // ✅ 정적 파일은 Cache First + 백그라운드 업데이트(성능)
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) {
      event.waitUntil((async () => {
        try {
          const res = await fetch(req);
          if (res && res.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(req, res.clone());
          }
        } catch (_) {}
      })());
      return cached;
    }

    try {
      const res = await fetch(req);
      if (res && res.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(req, res.clone());
      }
      return res;
    } catch (e) {
      return new Response('오프라인 상태입니다.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  })());
});
