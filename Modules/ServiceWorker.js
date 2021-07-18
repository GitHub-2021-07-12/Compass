navigator.serviceWorker.addEventListener('message', (event) => document.body.textContent += event.data);
navigator.serviceWorker.register('./ServiceWorker.js');

document.addEventListener(
  'click',
  async (event) => {
    await fetch('./a.js', {method: 'get'});
  },
);
