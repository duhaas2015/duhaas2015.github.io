// Sheepshead Scoring App - Service Worker
// Version 1.0.0

const CACHE_NAME = 'sheepshead-scoring-v1.0.0';
const OFFLINE_URL = '/games/offline.html';

// Files to cache for offline functionality
const FILES_TO_CACHE = [
  '/games/',
  '/games/index.html',
  '/games/docs.html',
  '/games/manifest.json',
  '/games/offline.html'
  // Icons will be cached when they exist:
  // '/games/icons/icon-192x192.png',
  // '/games/icons/icon-512x512.png'
];

// Install event - cache files
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: Caching app shell');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => {
        console.log('✅ Service Worker: Installation complete');
        // Force the waiting service worker to become active
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker: Activation complete');
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests (CDNs, APIs, etc.)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version
          console.log('📦 Serving from cache:', event.request.url);
          return cachedResponse;
        }

        // Try to fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cache successful responses
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            console.log('🌐 Fetched from network:', event.request.url);
            return response;
          })
          .catch(() => {
            // Network failed, try to serve offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            
            // For other requests, just fail
            throw new Error('Network request failed and no cache available');
          });
      })
  );
});

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  console.log('🔄 Service Worker: Background sync triggered');
  
  if (event.tag === 'sheepshead-data-sync') {
    event.waitUntil(
      // Here you could sync local data to cloud storage
      syncGameData()
    );
  }
});

// Push notification handling (for future use)
self.addEventListener('push', (event) => {
  console.log('🔔 Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New sheepshead game update!',
    icon: '/games/icons/icon-192x192.png',
    badge: '/games/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'view-game',
        title: 'View Game',
        icon: '/games/icons/action-view.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/games/icons/action-close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Sheepshead Scoring', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Service Worker: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'view-game') {
    // Open the app to the current game
    event.waitUntil(
      clients.openWindow('/games/?from=notification')
    );
  }
});

// Helper function for syncing data (placeholder)
async function syncGameData() {
  console.log('🔄 Syncing game data...');
  
  try {
    // Get data from localStorage
    const gameData = await getLocalGameData();
    
    if (gameData && gameData.needsSync) {
      // Here you would sync to your chosen cloud storage
      console.log('📤 Syncing to cloud storage...');
      
      // Mark as synced
      await markDataAsSynced();
      console.log('✅ Data sync complete');
    }
  } catch (error) {
    console.error('❌ Data sync failed:', error);
  }
}

// Helper functions for data management
async function getLocalGameData() {
  // This would integrate with your existing localStorage logic
  return new Promise((resolve) => {
    // Simulate getting data from localStorage
    setTimeout(() => {
      resolve({ needsSync: false });
    }, 100);
  });
}

async function markDataAsSynced() {
  // Mark data as successfully synced
  console.log('✅ Data marked as synced');
}

// Version update handling
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('🔄 Service Worker: Skipping waiting...');
    self.skipWaiting();
  }
});

// Periodic background sync (for future use)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'sheepshead-cleanup') {
    event.waitUntil(
      cleanupOldGameData()
    );
  }
});

async function cleanupOldGameData() {
  console.log('🧹 Cleaning up old game data...');
  // Implement cleanup logic for old cached data
}