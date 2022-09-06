function addAndSubtract(num1, num2, num3) {
    let sum = (a, b) => a +b;
    let subtract = (a, b) => a - b;
    let result = sum(num1, num2)
    console.log(subtract(result,num3));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);