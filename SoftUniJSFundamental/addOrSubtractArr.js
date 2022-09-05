function solve(arr) {
    let newArr = [];
    let sumOriginal = 0;
    let sumOfNewArr = 0;
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        sumOriginal += number;
        if (number % 2 === 0) {
            number += i;
            newArr.push(number);
        }else{
            number -= i;
            newArr.push(number);
        }
    }
    for (let num of newArr) {
        sumOfNewArr += num;
    }
    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumOfNewArr);
}

solve([5, 15, 23, 56, 35]);