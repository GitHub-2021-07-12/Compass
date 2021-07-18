navigator.serviceWorker.register('./ServiceWorker/ServiceWorker_server.js', {scope: './'});
navigator.serviceWorker.addEventListener('message', (event) => document.body.textContent += event.data);
