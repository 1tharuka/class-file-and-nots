//  setTimeout() = invokes a fution after a nimber of milliseconds
//                 asynchronous funtion (doesn't pause execution)


let timer1 = setTimeout(frstMasege,5000);
let timer2 = setTimeout(scondtMasege,6000);
let timer3 = setTimeout(trdeMasege,7000);


function frstMasege() {
    alert(`This is 500$`)
}
function scondtMasege() {
    alert(`This is 600$`)
}
function trdeMasege() {
    alert(`This is 700$`)
}
function mybtn(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert('bye');
}