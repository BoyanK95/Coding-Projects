// Inheritance = a child can inherit all the methods an properties from anohter class


class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }


}

class Rabbit extends Animal{

    name = "rabbit";


    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{

    name = "fish";


    swim(){
        console.log(`This ${this.name} is swiming`);
    }
}

class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(hawk.alive);
hawk.eat();
fish.sleep();
hawk.fly();
rabbit.run();
