
let ages = [18, 16, 21, 16,19,90];
let adults = ages.filter(checkAge);

adults.forEach(print);





function checkAge(element) {
    return element >= 18;
}

function print(element) {
    console.log(element);
}


let prices = [5, 10, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The total is : $${total}`); 


function checkOut(total, element) {
    return total + element;
}

const percent = (x, y) =>  x / y * 100;


console.log(`${percent(45, 50)}%`);

let grades = [100, 50, 90,60, 80, 70];

// grades.sort(descending);
// grades.forEach(print);

// function descending(x, y) {
//     return y - x;
// }


grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));