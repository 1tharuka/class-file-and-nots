// super keyword = Refers to the parent calss.
//                conmonly use unvak constructor of a parent class

class animale {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class rabet extends animale {
  constructor(name, age, runSped) {
    super(name,age);
    this.runSped = runSped;
  }
}
class fish extends animale {
  constructor(name, age, swimSped) {
    super(name,age);
    this.swimSped = swimSped;
  }
}
class mawk extends animale {
  constructor(name, age, flieSped) {
    super(name,age);
    this.flieSped = flieSped;
  }
}

const rabet1 = new rabet('rabert', 2, 30);
console.log(rabet1.name);
console.log(rabet1.age);
console.log(rabet1.runSped);

const fish1 = new fish('rabert', 2, 340);
console.log(fish1.name);
console.log(fish1.age);
console.log(fish1.swimSped);

const mawk1 = new fish('rabert', 2, 600);
console.log(mawk1.name);
console.log(mawk1.age);
console.log(mawk1.flieSped);