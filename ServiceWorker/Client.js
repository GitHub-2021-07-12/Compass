navigator.serviceWorker.register('./ServiceWorker.js');




navigator.serviceWorker.addEventListener('controllerchange', () => alert('controllerchange'));
navigator.serviceWorker.controller?.addEventListener('statechange', function () {alert('statechange ' + this.state)});
