// array.forEach() = executes a provided callback funtion
//                  once for each array element
const number = [1, 2, 3, 4, 5];
number.forEach(consoleItem);
function consoleItem(item,index,array){
console.log(`${item} ${index} ${array}`)
}