const CompterMove = Math.floor(Math.random() * 10 + 1);

function gase() {
  let gasse = document.getElementById("nuberInout").value;

  if (gasse === CompterMove) {
    alert(`You gase ${gasse} Computer gase ${CompterMove} You wins`);
  } else if (gasse > CompterMove) {
    alert(`You gase ${gasse} Computer gase ${CompterMove} lage`);
  } else {
    alert(`You gase ${gasse} Computer gase ${CompterMove} smole`);
  }
}
