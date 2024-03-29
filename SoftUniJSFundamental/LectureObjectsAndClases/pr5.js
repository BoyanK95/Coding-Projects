function solve(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name, 
      this.age = age
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let cats = []
  arr.forEach(line => {
    let catData = line.split(' ')
    let [name, age] = catData;

    let cat = new Cat(name, age)
    cats.push(cat)
  });
  for (const cat of cats) {
    cat.meow();
  }
}

solve(["Mellow 2", "Tom 5"]);
