//  inheritance  = a chid class can inherit all he
//                 methods and properties form another class
class namems{
 alive = true;

  eat(){
    console.log(`${this.name} is eting`)
  }
  slping(){
    console.log(`${this.name} is slping`)
  }
}

class rabet extends namems{
    name = "rabet"
    run(){
        console.log(`${this.name} runing`)
    }
}
class fishe extends namems{
    name = "fishe"
    sumin(){
        console.log(`${this.name} swime`)
    }
}
class hoks extends namems{
    name = "hoks"
    fline(){
        console.log(`${this.name} flene`)
    }
}
const rabet1 = new rabet();
const fishe1 = new fishe();
const hoks1 = new hoks();
console.log(rabet1.run())
