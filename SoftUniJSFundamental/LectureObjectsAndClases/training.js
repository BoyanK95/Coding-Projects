function makeCatSound() {
    console.log('Meow');
}


// let streetCat = { 
//     name: "Kitrie",
//      age: 1,
//      breed: "Unknown",
//      makeSound: makeSound 
//     };
// let streetCat2 = { name: "Tom", age: 2, breed: "Persian", makeSound: makeCatSound};

// let cat = {};

// cat.name = "Navcho";
// cat.age = 5;
// cat.breed = "Persian";

// console.log(cat);
// console.log(streetCat);

let cat = {
    name:'Kitrie',
    age: 2,
    makeSound: makeCatSound
}


let dog = {
    name:'Iara',
    breed:'Pug',
    makesound: () => console.log('Woof')
    
}

for(let prop in cat){
    console.log(cat[prop]);
}