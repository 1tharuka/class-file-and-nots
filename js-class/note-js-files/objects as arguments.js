class car {
    constructor(modle, yerse, color){
        this.modle = modle;
        this.yerse = yerse;
        this.color = color;

    }
}
const Car   = new  car("tesla", 2023, "balck");
const Car1  = new car("lambo", 2024, "red");
const Car2  = new car("BMW", 2034, "white");
colorCang(Car2,"red")
carDisplay(Car2)
function carDisplay(car) {
   console.log(car.modle);
   console.log(car.yerse);
   console.log(car.color)   
}
function colorCang(car,color){
    car.color = color;
}