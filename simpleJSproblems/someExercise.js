const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

let shopingCart = 0;

shopingCart += store.get("t-shirt");
shopingCart += store.get("underwear");
console.log(shopingCart);

store.forEach((value, key) => console.log(`${key} $${value}`));


// class = a blueprint for creating objects

class Player{
    score = 0;

    pause(){
        console.log("You paused the game!");
    }
    exit(){
        console.log("You exited the game!");
    }

}

const player1 = new Player();
const player2 = new Player();

player1.score += 1;


console.log(player1.score);

player1.pause();
player1.exit();

console.log(player2.score);

player2.exit();

// constructor  = a special method of a class, that accepts arguments and assigns properties

class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying !`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patric", 35, 1.2);
const student3 = new Student("Sandy", 25, 4.2);


console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);

student2.study();



// static  = belongs to the class, not the objects, usefull for caches, fixed-configuration, usefull for utility functions !

class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("BMW");
const car3 = new Car("Ford");
const car4 = new Car("Tesla");
const car5 = new Car("Lambo");

console.log(Car.numberOfCars);