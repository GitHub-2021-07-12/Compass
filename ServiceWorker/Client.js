// navigator.serviceWorker.register('./ServiceWorker.js');




navigator.serviceWorker.addEventListener('controllerchange', () => alert('controllerchange'));
navigator.serviceWorker.controller?.addEventListener('statechange', function () {alert('statechange ' + this.state)});




async function main() {
  let button_refresh = document.querySelector('.button_refresh');
  let registration = await navigator.serviceWorker.register('./ServiceWorker.js', {updateViaCache: 'none'});
  button_refresh.addEventListener('click', async () => {
    console.log(await registration.update());
  });
  registration.addEventListener('updatefound', (event) => {
    alert('updatefound');
    console.log(event);
  });
}




main();
