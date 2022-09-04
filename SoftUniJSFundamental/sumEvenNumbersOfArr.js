function sumEvenNum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        num = Number(num)
        if (num % 2 == 0) {
            sum += num;
        }
    }
    console.log(sum);
}

sumEvenNum(['1','2','3','4','5','6']);
sumEvenNum(['3','5','7','9']);