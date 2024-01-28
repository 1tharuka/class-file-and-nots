const myove = document.getElementById("mymove");
window.addEventListener("keydown", move);
let y = 0;
let x = 0;
function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myove.style.marginTop = y + 'px';
            break;
    }
    switch(event.key){
        case "ArrowRight":
            x+=5;
            myove.style.left = x + 'px';
            break;
    }
}