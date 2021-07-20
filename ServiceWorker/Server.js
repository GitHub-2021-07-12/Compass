importScripts('./ServiceWorker/Options.js');




// addEventListener('activate', (event) => console.log(event.type));
// addEventListener('install', (event) => console.log(event.type));

// addEventListener('activate', (event) => event.waitUntil(clients.claim()));
addEventListener('install', (event) => skipWaiting());

// addEventListener('fetch', (event) => console.log(event.request.url));




// async function f() {
//   let clients = await clients.matchAll();
  
//   for (let client of clients) {
//     client.postMessage(clients.length);
//   }
// }

// setInterval(f, 1e3);




// addEventListener('fetch', (event) => {
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




// addEventListener('install', (event) => {
//   event.waitUntil(caching());
//   skipWaiting();
// });

// async function caching() {
//   let cache = await caches.open('c');
  
//   return cache.addAll(options.resources);
// }

// caching();


// addEventListener('install', on_install);

// async function on_install(event) {
//   event.waitUntil(async () => {
//     let cache = await caches.open('Compass');
    
//     return cache.addAll(options.resources);
//   });
  
//   skipWaiting();
// }


// addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open('v1').then((cache) => {
//       return cache.addAll([
//         './ServiceWorker/a.js',
//         './ServiceWorker/b.js',
//       ]).catch(() => Promise.reject());
//     })
//   );
// });




addEventListener('fetch', on_fetch);

function on_fetch(event) {
  clients.get(event.clientId).then((client) => client?.postMessage(event.request.url));
  
  if (event.request.method != 'GET') return;
  
  event.respondWith(response_define(event.request));
}

async function response_define(request) {
  let cache = await caches.open('Compass');
  let response = await cache.match(request);
  
  if (response) return response;
  
  try {
    response = await fetch(request);
    await cache.put(request, response.clone());
  }
  catch (error) {
    response = new Response(null);
  }
  
  return response;
}
