//  array.reduce() = reduce an array to a singal value

let number = [10, 10, 10, 10,10];
let total = number.reduce(sume);
console.log(total)
function sume(total , element) {
    return total + element
}