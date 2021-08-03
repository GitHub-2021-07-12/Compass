export class Vector {
  x = null;
  y = null;
  z = null;
  
  
  
  
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  
  
  constructor(x = 0, y = 0, z = 0) {
    this.init(...arguments);
  }
  
  
  init(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    
    return this;
  }
  
  
  invert() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    
    return this;
  }
}
