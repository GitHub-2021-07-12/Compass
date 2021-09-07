import '../ServiceWorker/Client.js';
import '../Components/Compass/Compass.js';




let _compass = document.querySelector('c-compass');




function _compass_on_pointerDown() {
  this.hasAttribute('animated') ? this.removeAttribute('animated') : this.setAttribute('animated', true);
}




function main() {
  _compass.addEventListener('pointerdown', _compass_on_pointerDown);
  _compass.start();
}




main();
