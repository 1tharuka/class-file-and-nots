// 2D array = an array of array
let  fruds = ['apple', 'orang', 'mango'];
let  vgetable = ['carete', 'ineyans', 'potatos'];
let  meets = ['agges', 'chikns', 'frishe'];
let forts = [fruds, vgetable, meets];
forts[2][1]="steks"


for(let list of forts){
for(let items of list){
console.log(items);
}
}
