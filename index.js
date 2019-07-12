// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius*2;
  }
  get circumference() {
    return this.radius*2*Math.PI;
  }
  get area() {
    return this.radius*this.radius*Math.PI;
  }
  set diameter(newValue) {
   this.radius = newValue/2; 
  }
  set circumference(newValue) {
    this.radius = newValue/(2*Math.PI);
  }
}