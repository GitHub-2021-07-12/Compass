(async () => {
  let registration = await navigator.serviceWorker.register('./ServiceWorker.js');
  // await registration.unregister();
  
  // registration.active.postMessage(new Date());
  
  // console.log('unreg');
  // navigator.serviceWorker.addEventListener('message', (event) => console.log(event.data));
  // navigator.serviceWorker.addEventListener('message', (event) => document.body.textContent += event.data);
  
  // (await navigator.serviceWorker.ready).active.postMessage(new Date());
})();

navigator.serviceWorker.addEventListener('message', (event) => document.body.textContent += event.data);

document.addEventListener(
  'click',
  async (event) => {
    await fetch('./a.js', {method: 'post'});
  },
);
