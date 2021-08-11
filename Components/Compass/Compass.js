import {Component} from '../../Api/Component.js';
import {Quaternion} from '../../Api/Quaternion.js';




export class Compass extends Component {
  _arrow = null;
  _dir_angle = 0;
  _quaternion = new Quaternion();
  _sensor_orientation = new AbsoluteOrientationSensor({frequency: 60, referenceFrame: 'screen'});
  
  
  
  
  _arrow_rotate() {
    this._quaternion.init(...this._sensor_orientation.quaternion);
    let [vector, angle] = this._quaternion.decay();
    this._arrow.style.setProperty('--_dir_angle', this._dir_angle);
    this._arrow.style.setProperty('--_rotation_angle', angle);
    this._arrow.style.setProperty('--_rotation_vector_x', vector.x);
    this._arrow.style.setProperty('--_rotation_vector_y', -vector.y);
    this._arrow.style.setProperty('--_rotation_vector_z', vector.z);
  }
  
  
  async _build() {
    await super._build();
    
    this._arrow = this._root.querySelector('.arrow');
    
    this._sensor_orientation.addEventListener('reading', () => this._arrow_rotate());
    // this._sensor_orientation.start();
    
    Promise.all([
      navigator.permissions.query({name: 'accelerometer'}),
      navigator.permissions.query({name: 'gyroscope'}),
      navigator.permissions.query({name: 'magnetometer'}),
    ])
      .then((results) => {
        if (results.every((result) => result.state == 'granted')) {
          this._sensor_orientation.start();
        }
        else {
          alert('No permissions');
        }
      })
    ;
  }
  
  
  
  
  // start() {
    // let f = () => {
    //   this._arrow_rotate();
      
    //   requestAnimationFrame(f);
    // };
    // requestAnimationFrame(f);
    
    // this._sensor_orientation.start();
    // this._sensor_orientation.addEventListener('reading', () => this._arrow_rotate());
  // }
}


Compass.init(import.meta.url);
