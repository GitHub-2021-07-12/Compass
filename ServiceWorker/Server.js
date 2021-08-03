importScripts('./ServiceWorker/Options.js');




function _on_fetch(event) {
  // clients.get(event.clientId).then((client) => client?.postMessage(event.request.url));
  
  if (event.request.method != 'GET') return;
  
  event.respondWith(_response_define(event.request));
}


async function _response_define(request) {
  let cache = await caches.open(options.cache_dynamic);
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




function main() {
  addEventListener('fetch', _on_fetch);
  addEventListener('install', (event) => skipWaiting());
}




main();
