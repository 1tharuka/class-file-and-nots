function games() {
  let x = Math.floor(Math.random() * 6 + 1);
  let y = Math.floor(Math.random() * 6 + 1);
  let z = Math.floor(Math.random() * 6 + 1);
  document.getElementById('xlable').innerHTML=x;
  document.getElementById('ylable').innerHTML=y;
  document.getElementById('zlable').innerHTML=z;

}
