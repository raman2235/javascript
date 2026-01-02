// Object-Oriented Programming in JavaScript
//constructor function example
//constructor function--it is recommended to use capitalized first letter for constructor function names
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}
let person1 = new Person("Alice", 30);
person1.greet();
let person2 = new Person("Bob", 25);
person2.greet();

//prototype example
//prototype--shared methods and properties for all instances
//prototype is shared among all instances of the constructor function
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}
Animal.prototype.makeSound = function() {
    console.log("The " + this.type + " goes " + this.sound);
}
let dog = new Animal("dog", "woof");
dog.makeSound();
let cat = new Animal("cat", "meow");
cat.makeSound();

//ES6 Class example
//class syntax--more concise and easier to read
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }  
    info() {
        console.log("This car is a " + this.brand + " " + this.model);
    }      
}
let car1 = new Car("Toyota", "Corolla");
car1.info();
let car2 = new Car("Honda", "Civic");
car2.info();

//extends example
//inheritance--subclass inherits from superclass
class Vehicle { 
    constructor(type) {
        this.type = type;
    }
    start() {
        console.log("The " + this.type + " is starting.");
    }       
}
class Motorcycle extends Vehicle {
    constructor(brand, model) {
        super("motorcycle");
        this.brand = brand;
        this.model = model;
    }
    info() {
        console.log("This motorcycle is a " + this.brand + " " + this.model);
    }  
}
let moto1 = new Motorcycle("Yamaha", "MT-07");
moto1.start();
moto1.info();

//classical inhertance - classes bnana and unse extend krdena
//prototypal inhertance - object bnana and uske ander dusra object daal dena using Object.create() method
//prototypal inheritance example
let parent = {
    greet: function() { 
        console.log("Hello from the parent object!");
    }
};
let child = Object.create(parent);
child.greet();