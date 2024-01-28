function input(){
let a;
let b;
let c;

a =document.getElementById('input-a').value;
b = document.getElementById('input-b').value;
// sqrt vrga molaya
c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));
document.getElementById('label').innerHTML ="value is "+c;
}