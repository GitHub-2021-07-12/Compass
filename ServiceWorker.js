self.addEventListener('install', (event) => console.log(event.type));
self.addEventListener('activate', (event) => console.log(event.type));
self.addEventListener('fetch', (event) => console.log(event.type));


// self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));
self.addEventListener('install', (event) => skipWaiting());
// self.addEventListener('activate', (event) => fetch('a.txt'));


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


// importScripts('a.js');
// fetch('a.txt');


// self.addEventListener('message', (event) => event.source.postMessage('SW ' + event.data));


async function f() {
  let clients_list = await clients.matchAll();
  
  for (var i = 0; i < clients_list.length; i++) {
    // clients.openWindow(clients_list[i].url);
    clients_list[i].postMessage(clients_list.length);
  }
}

// setInterval(f, 1e3);
