//  objate =  a grup of  propertes and methodas
//            propertes = what an obgate has
//            methods = what an objact can do
//            use - to access propertes/methodas

let car = {
    modle:'tesla',
    color:'red',
    speed:'500km/s',

    driv: function(){
        console.log('You can drive');
    },
    brake: function(){
        console.log('You barke a car is pakeing');
    },
   car2 : {
        modle:'tesla',
        color:'red',
        speed:'80km/s',
    
        driv: function(){
            console.log('You can drive');
        },
        brake: function(){
            console.log('You barke a car is pakeing');
        }
    }
}
console.log(car.modle);
console.log(car.color);
console.log(car.car2.speed);
car.driv();
car.brake();

