// array.map() = 
/*executes a provided callback funtion
once for eacharray element and crate a new arrray*/

let number = [1, 2, 3, 4, 5];
let squares = number.map(square);

squares.forEach(print);


function square(element){
return Math.pow(element,2);
}
function print(element){
console.log(element);
}