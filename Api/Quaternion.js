import {Vector} from './Vector.js';




export class Quaternion {
  x = null;
  y = null;
  z = null;
  w = null;
  
  
  
  
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  
  
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.init(...arguments);
  }
  
  
  decay() {
    let angle_half = Math.acos(this.w);
    let angle_half_sin = Math.sin(angle_half);
    let angle = angle_half * 2;
    let vector = new Vector(this.x * angle_half_sin, this.y * angle_half_sin, this.z * angle_half_sin);
    
    return [vector, angle];
  }
  
  
  init(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    
    return this;
  }
  
  
  invert() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    
    return this;
  }
  
  
  mult_quaternion(quaternion) {
    this.x = this.w * quaternion.x + this.x * quaternion.w + this.y * quaternion.z - this.z * quaternion.y;
    this.y = this.w * quaternion.y - this.x * quaternion.z + this.y * quaternion.w + this.z * quaternion.x;
    this.z = this.w * quaternion.z + this.x * quaternion.y - this.y * quaternion.x + this.z * quaternion.w;
    this.w = this.w * quaternion.w - this.x * quaternion.x - this.y * quaternion.y - this.z * quaternion.z;
    
    return this;
  }
  
  
  mult_vector(vector) {
    this.x = this.w * vector.x + this.y * vector.z - this.z * vector.y;
    this.y = this.w * vector.y - this.x * vector.z + this.z * vector.x;
    this.z = this.w * vector.z + this.x * vector.y - this.y * vector.x;
    this.w = -this.x * vector.x - this.y * vector.y - this.z * vector.z;
    
    return this;
  }
  
  
  rotate(vector) {
    let quaternion_inverse = this.clone().invert();
    this.mult_vector(vector).mult_quaternion(quaternion_inverse);
    
    return new Vector(this.x, this.y, this.z);
  }
}
