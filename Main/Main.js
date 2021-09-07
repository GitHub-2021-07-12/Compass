import '../ServiceWorker/Client.js';
import '../Components/Compass/Compass.js';




let _compass = document.querySelector('c-compass');
let _input = document.querySelector('input');




function _compass_on_pointerDown() {
  this.hasAttribute('animated') ? this.removeAttribute('animated') : this.setAttribute('animated', true);
}


function _input_on_change() {
  _compass.style.setProperty('--animation_duration', _input.value);
}




function main() {
  _compass.addEventListener('pointerdown', _compass_on_pointerDown);
  _compass.start();
}




main();
