let timer = document.getElementById("sconds").innerHTML;
let min = document.getElementById("min").innerHTML;
let hovers = document.getElementById("hover").innerHTML;
let days = document.getElementById("day").innerHTML;

let timee = sonde();

function play() {
 setInterval(sonde,1000);
 strse(); 
}
function plu(){
  clearInterval(sonde());
}

function plse() {
 timer = -1;
 min = 0;
 hovers = 0;
 days = 0;
}
function sonde() {
  timer++;
  document.getElementById("sconds").innerHTML = timer;
  document.getElementById("min").innerHTML = min;
  document.getElementById("hover").innerHTML = hovers;
  document.getElementById("day").innerHTML = days;
  if (timer === 60) {
    timer = 0;
    min++;
  } else if (min === 60) {
    min = 0;
    hovers++;
  } else if (hovers === 60) {
    hovers = 0;
    days++;
  }
}
