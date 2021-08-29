importScripts('./ServiceWorker/Options.js');




let _cache_name = `${options.cache_name}_${options.version}`;




async function _caches_remove() {
  let caches_delete_promises = []
  let caches_keys = await caches.keys();
  
  for (let key of caches_keys) {
    if (key == _cache_name) continue;
    
    caches_delete_promises.push(caches.delete(key));
  }
  
  return Promise.all(caches_delete_promises);
}


function _on_activate(event) {
  event.waitUntil(_caches_remove());
  event.waitUntil(clients.claim());
}


function _on_fetch(event) {
  if (event.request.method != 'GET') return;
  
  event.respondWith(_response_define(event.request));
}


function _on_install(event) {
  skipWaiting();
}


async function _response_define(request) {
  let cache = await caches.open(_cache_name);
  let response = await cache.match(request);
  
  if (response) return response;
  
  try {
    response = await fetch(request);
    // await cache.put(request, response.clone());
    cache.put(request, response.clone());
  }
  catch (error) {
    response = new Response(null);
  }
  
  return response;
}




function main() {
  addEventListener('activate', _on_activate);
  addEventListener('fetch', _on_fetch);
  addEventListener('install', _on_install);
}




main();
