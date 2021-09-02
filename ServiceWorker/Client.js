function _on_controllerChange() {
  // alert('controllerchange - reload page');
  
  location.reload();
}




function main() {
  // navigator.serviceWorker.addEventListener('controllerchange', _on_controllerChange);
  navigator.serviceWorker.register('./ServiceWorker.js', {updateViaCache: 'none'});
  
  let button = document.querySelector('button');
  button.addEventListener('click', () => {
    fetch(new Date());
  });
}



// navigator.serviceWorker.controller?.addEventListener('statechange', function () {alert('statechange ' + this.state)});




// async function main() {
//   let button_refresh = document.querySelector('.button_refresh');
//   let registration = await navigator.serviceWorker.register('./ServiceWorker.js', {updateViaCache: 'none'});
//   button_refresh.addEventListener('click', async () => {
//     console.log(await registration.update());
//   });
//   registration.addEventListener('updatefound', (event) => {
//     alert('updatefound');
//     console.log(event);
//   });
// }




main();
