self.addEventListener('activate', (event) => console.log(event.type));
self.addEventListener('install', (event) => console.log(event.type));

// self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));
self.addEventListener('install', (event) => skipWaiting());

self.addEventListener('fetch', (event) => console.log(event.request.url));




async function f() {
  let clients = await self.clients.matchAll();
  
  for (let client of clients) {
    client.postMessage(clients.length);
  }
}

// setInterval(f, 1e3);




// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((resp) => {
//       // fetch('a.txt');
      
//       return resp || fetch(event.request).then((response) => {
//         return caches.open('v1').then((cache) => {
//           cache.put(event.request, response.clone());
//           return response;
//         });
//       });
//     })
//   );
// });




self.addEventListener('fetch', (event) => event.respondWith(response_define(event.request)));

async function response_define(request) {
  let cache = await self.caches.open('Compass');
  let response = await cache.match(request);
  
  if (response) return response;
  
  response = await fetch(request);
  cache.put(request, response.clone());
  
  return response;
}
