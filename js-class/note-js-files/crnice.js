// tolocalestring() = retuns a string with a languge
//                    sensitive representation of this

// number,tolocalstring( locale,{ options});
// 'locals' = specife  that language (undefined = default set in browser)
//  'options' = object with formatting options 

let myNum = 1288888825888888888233344.564;
// myNum =myNum.toLocaleString("es-us",{style:"currency",currency:"USD"});
myNum = myNum.toLocaleString(undefined,{style:'percent'})
console.log(myNum)