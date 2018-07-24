// https://gist.github.com/Omranic/4e648fa38caab7b8207d3e237fde0c77#create-service-worker

const shellCacheName = "pwa-todo";
const filesToCache = [
	"./**/*",
	"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
];

// Listen to installation event
self.addEventListener('install', (e) => {
	console.info('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(shellCacheName).then((cache) => {
			console.info('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);
});


// Listen to activation event
self.addEventListener('activate', (e) => {
	console.info('[ServiceWorker] Activate');
	e.waitUntil(
		// Get all cache containers
		caches.keys().then(function (keyList) {
			return Promise.all(keyList.map((key) => {
				// Check and remove invalid cache containers
				if (key !== shellCacheName) {
					console.info('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);

	// Enforce immediate scope control
	return self.clients.claim();
});

// Listen to fetching event
self.addEventListener('fetch', (e) => {
	console.info('[ServiceWorker] Fetch', e.request.url);
	e.respondWith(
		caches.match(e.request).then((response) =>
			response || fetch(e.request)
		)
	);
});