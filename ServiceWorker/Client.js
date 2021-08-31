// navigator.serviceWorker.register('./ServiceWorker.js');




navigator.serviceWorker.addEventListener('controllerchange', () => alert('controllerchange'));
navigator.serviceWorker.controller?.addEventListener('statechange', function () {alert('statechange ' + this.state)});




async function main() {
  let button_refresh = document.querySelector('.button_refresh');
  let registration = await navigator.serviceWorker.register('./ServiceWorker.js');
  button_refresh.addEventListener('click', () => registration.update());
  registration.addEventListener('updatefound', () => alert('updatefound'));
}




main();
