//  array.filter() = creates a new array withe all elenents
//                   the pass the text provided by a funtion

let age = [12, 15, 14 , 20, 50, 60, 90];
let cheke = age.filter(cakeAge);
cheke.forEach(print)


function cakeAge(elenents){
return elenents >= 18;
}
function print(elenents){
    console.log(elenents);
}