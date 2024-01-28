// static keyword   = belongs to the class, not the objects
//                    properties: usful for caches fixed- configuration
//                    medhods: useful for utilty funtions
 class car {
    static nuberOfCar = 0;
    constructor(modle) {
        this.modle = modle
        car.nuberOfCar += 1;
    }
   static stasRase(){
        console.log("3....2...1...Go")
    }
 }
 const car1 = new car('vaga');
 const car2 = new car('BMW');
 const car3 = new car('Tesla');
 const car4 = new car('Bans');
 console.log(car.nuberOfCar)
 car.stasRase()
