//  addEventListener() (event,fution,useCpture)
// you can add many event handlers to one element
// even the event that  invokes different funtions

// const innerDiv = document.getElementById("mydiv");

// innerDiv.addEventListener("mouseover",chagered);
// innerDiv.addEventListener("mouseout",chagegren);


// function chagered(){
//     innerDiv.style.background = 'red';
// };
// function chagegren(){

//     innerDiv.style.background = 'aqua';
// }

const innerDiv = document.getElementById("mydiv").style;
setInterval(clor,1000)

function clor() {
    if(innerDiv.background === 'aqua'){
        innerDiv.style.background = 'red';
    }
}