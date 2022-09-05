function printStars(count) {
    let char = "*";
    let stars = char.repeat(count);
    console.log(stars);
}


function solve(num) {
    let count = Math.sqrt(num)
    printStars(count);
    printStars(count + count);
    printStars(count + count + count);
    printStars(count + count + count + count);


}


// Function expression
let sum = function (a, b) {
    let result = a + b;

    return result;
}

let result = sum(10,5);
console.log(result);

// Function declaration
function sum(a, b) {
    return a + b;
}