// Service Worker для КФФМ (Казахстанская Федерация функционального многоборья)
// Версия: 1.0.0

const CACHE_NAME = 'fffk-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/about',
  '/news',
  '/competitions',
  '/images/logos/logo.png',
  '/images/logos/logoinsite.png',
  '/lang.js',
  '/mobile.css'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Установка Service Worker');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Кеширование основных файлов');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('[SW] Ошибка кеширования:', error);
      })
  );
  self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Активация Service Worker');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Удаление старого кеша:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Обработка запросов (Network First, fallback to Cache)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Клонируем ответ для кеша
        const responseClone = response.clone();
        
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        
        return response;
      })
      .catch(() => {
        // Если сеть недоступна, берем из кеша
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          
          // Если страница не в кеше, возвращаем офлайн-заглушку
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Обработка сообщений от клиента
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
