// get = binds an object property to a futions
//       when that property is accessed

class car {
  constructor(power) {
    this._gase = 25;
    this._power = power;
  }
  get power() {
    return `${this._power} sh`;
  }
  get gase() {
    return `${this._gase}  lp`;
  }
  set gase(value) {
    this._gase = value;
  }
}
let Car = new car(200);
Car.gase = 2000000000;
console.log(Car.power);
console.log(Car.gase);

// set = binds an object property to a funtion
//      when hat property id assiggend a value

// class car {
//   constructor(power) {
//     this._gase = 25;
//     this._power = power;
//   }
//   get power() {
//     return `${this._power} sh`;
//   }
//   get gase() {
//     return `${this._gase}  lp`;
//   }
//   set gase(value) {
//     this._gase = value;
//   }
// }
// Car._gase = 1220254;
// console.log(Car.gase);
