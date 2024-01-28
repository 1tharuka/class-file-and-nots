// maps = object that gholds key-value of any data type
const stres = new Map([
    ['T-srts',20],
    ['jims',30],
    ['shoks',90],
    ['balte',70],
]);

stres.forEach((key,value) => console.log(`${value} $${key}`));
console.log(stres.get('T-srts'));
console.log(stres.set('T-mas'));
console.log(stres.delete('T-mas',3333300));
console.log(stres.has('T-mas',3333300));
console.log(stres.has('T-srts'));
console.log(stres.size);



