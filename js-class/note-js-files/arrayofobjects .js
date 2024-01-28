class car {
    constructor(modle, yerse, color){
        this.modle = modle;
        this.yerse = yerse;
        this.color = color;

    }
    driv(){
        console.log(`You drive ${this.modle}`);
    }
}
const Car   = new  car("tesla", 2023, "balck");
const Car1  = new car("lambo", 2024, "red");
const Car2  = new car("BMW", 2034, "white");
const arrayCar = [Car, Car1, Car2];
/*
console.log(arrayCar[0].modle);
console.log(arrayCar[1].modle);
console.log(arrayCar[2].modle);

arrayCar[0].driv();
arrayCar[1].driv();
arrayCar[2].driv();
*/


stastRase(arrayCar)
function stastRase(arrayCar) {
  for(const car of arrayCar){
   car.driv()
  }  
}

