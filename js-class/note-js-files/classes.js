// classes = a blueprint for creating objects 
//           define what properties and methods they have
//           use a construction for unique propertise

class player{
scor = 0;
pose(){
    console.log("you pose")
}
exset() {
    console.log("you exset")
}
}
const player2 =new player();
const player3 =new player();
console.log(player3.scor);
player2.scor++
console.log(player2.scor);
