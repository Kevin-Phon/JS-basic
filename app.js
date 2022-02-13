//function constructor and 'new' keyword

function Person(name,age){
    this.name = name;
    this.age = age;
}

   //object
let person1 = new Person("Kevin",23);
console.log(person1);