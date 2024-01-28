// the idea behind a module is that it's a file of reusable code
//we can inport sections of pre-written code to use  whenever
// great for any general utiliy value and funtion
// helps to make you cod more reusable and maitanable
// think of modules as seperate chaperate chapters of a book


// import { PI,getCircumference,getArea } from "./Esb-mate.js";

import * as MathUtil from "./Esb-mate.js";


console.log(MathUtil.PI);

let Circumference =MathUtil.getCircumference(10);
console.log(Circumference);

let  Area=MathUtil.getArea(10);
console.log(Area);