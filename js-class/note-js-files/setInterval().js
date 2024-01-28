// setInterval() = invokes a funtion repeatedly after a number mliscond------
//                asynchronous funtion (doesn't pause execution)

let cout = 0;
let max = window.prompt('enter you namber');
max = Number(max);
const timer =  setInterval(count, 1000)
function count(){
    cout++
    console.log(cout);
    if(cout >= max){
        clearInterval(timer);
     
    }
}