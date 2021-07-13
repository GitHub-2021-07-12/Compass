// navigator.serviceWorker.register('./ServiceWorker.js')
//   .then((registration) => registration.unregister().then(() => console.log('unreg')))
// ;


(async () => {
  let registration = await navigator.serviceWorker.register('./ServiceWorker.js');
  // await registration.unregister();
  
  // registration.active.postMessage(new Date());
  
  // console.log('unreg');
  navigator.serviceWorker.addEventListener('message', (event) => console.log(event.data));
})();


// navigator.serviceWorker.ready.then((registration) => {
//   registration.active.postMessage(new Date());
// });
