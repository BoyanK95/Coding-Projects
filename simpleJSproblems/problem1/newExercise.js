
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

