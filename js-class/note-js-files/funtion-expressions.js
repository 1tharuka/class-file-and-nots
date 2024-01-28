// function expressions = funtion withot a name (anonymous funtion)
//                       avoid polluting the global scope with names
//                       write it, then forget about it

let lable = 0 ;

document.getElementById('degres').onclick = function(){
    lable++
  document.getElementById('lable').innerHTML = lable

}
document.getElementById('indegres').onclick = function(){
    lable--
  document.getElementById('lable').innerHTML = lable

}