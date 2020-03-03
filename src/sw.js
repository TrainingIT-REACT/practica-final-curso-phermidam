const cacheName = "app-files-v1";

const filesToCache = [
  '/',
  '/main.js',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install', (event) => {
  	console.log("El service worker ha sido instalado!");
  	event.waitUntil(
    	caches.open(cacheName).then(cache => {
        	console.log("Cache abierta");
        	return cache.addAll(filesToCache);
      	})
  	)
});

self.addEventListener('fetch', function(event) {
  	event.respondWith(
    	caches.match(event.request).then(function(response) {
        	if (response) {
          		return response;
        	}
        	return fetch(event.request);
      	})
  	);
});

self.addEventListener('activate', function(e) {
  	console.log('activado!');
});

self.addEventListener('message', (e) => {
	if (e.data.action === 'skipWaiting') {
		self.skipWaiting();
	}
});