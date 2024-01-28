// spread operator = allows an iterable such as on
// ...                  array or string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacjs the elements)
let number = [1, 2, 3, 4,12, 5, 6, 7, 8, 9];
console.log(...number);

let maximal = Math.max(...number);
console.log(maximal);