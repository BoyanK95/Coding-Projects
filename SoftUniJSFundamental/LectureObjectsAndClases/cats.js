function solve(input) {
    class Cat{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];

    for (let i = 0; i < input.length; i++) {
        let catArr = input[i].split(' ');
        let [name, ageText] = catArr;
        
        let cat = new Cat(name, Number(ageText));
        cats.push(cat);
    }
    for (const cat of cats) {
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5'])