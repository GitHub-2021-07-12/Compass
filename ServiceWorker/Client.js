// navigator.serviceWorker.register('./ServiceWorker.js');




navigator.serviceWorker.addEventListener('controllerchange', () => alert('controllerchange'));
navigator.serviceWorker.controller?.addEventListener('statechange', function () {alert('statechange ' + this.state)});




async function main() {
  let registration = await navigator.serviceWorker.register('./ServiceWorker.js');
  registration.addEventListener('updatefound', () => alert('updatefound'));
}

main();
