//rest parameters = represents an infefinte number
// ...              of parameters
//                  (packs arguments into arrayf)


let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
console.log(sum(a, b, c, d, e));
function sum(...numbers){
    let tatol = 0;
    for(let number of numbers){
        tatol += number
    }
    return tatol;

}
