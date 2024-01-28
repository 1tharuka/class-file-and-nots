//  error  = object witha description of
//            someting went wrong


//            can't open a file
//            Lose connection
//            user types incorrect input
//  
/*           TypeError
try{
console.lag()
}
catch(error){
console.log(error)
}
*/
try{
    let x = window.prompt('Enter Number');
    x = Number(x);
    console.log(x+'Nuber')
    if(isNaN(x)) throw "That wasn't a number";
    if(x === " ") throw "That wasn amte"
    }
    catch(error){
    console.log(error)
    }
    finally{
        console.log('This excute')
    }