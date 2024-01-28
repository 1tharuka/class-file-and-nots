// this keyword = reference to  particular objecat
//                the objact depends on the immediate context

const car = {
    modle:'tesla',
    color:'red',
    speed:'500km/s',

    driv: function(){
        console.log(`You can drive ${this.modle}`);
    },

}
const car2 = {
    modle:'vaga',
    color:'red',
    speed:'80km/s',

    driv: function(){
        console.log(`You can drive ${this.modle}`);
    },
}
car.driv();
car2.driv();