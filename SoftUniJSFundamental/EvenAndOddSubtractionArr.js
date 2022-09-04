function solve(numbers) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let number of numbers) {
        number = Number(number);
        if (number % 2 == 0) {
            sumEven += number;
        }else{
            sumOdd += number;
        }
    }
    totalSum = sumEven - sumOdd;
    console.log(totalSum);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10])