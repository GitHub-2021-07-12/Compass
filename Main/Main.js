import '../ServiceWorker/Client.js';
import '../Components/Compass/Compass.js';




function main() {
  let compass = document.querySelector('c-compass');
  compass.start();
  
  compass.addEventListener('pointerdown', function () {
    this.hasAttribute('animated') ? this.removeAttribute('animated') : this.setAttribute('animated', true);
  });
}




main();
