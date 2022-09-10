function solve(arr) {
    let firstNum = Number(arr.shift(arr));
    let secondNum = Number(arr.pop(arr))
    let sum= firstNum + secondNum;

    console.log(sum);
}

solve(['20', '30', '40'])