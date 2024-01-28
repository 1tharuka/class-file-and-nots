// constructors  = a special method of a class,
//                acccepts arguments and assings properties

class student {
    constructor(name, age, gpa){
      this.name = name;
      this.age = age;
      this.gpa = gpa
    };
    student(){
        console.log(`stadt ${this.name}`);
    };
}
const student1 = new student('Tharuka', 20, 3.5); 
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
const student2 = new student('Dilshara', 30, 5);
console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);

student1.student();
student2.student();