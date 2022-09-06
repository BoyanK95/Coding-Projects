function solve(arr) {
    

    for (let number of arr) {
        if (number == reverseNumber(number)) {
            console.log("true");
        }
        else{
            console.log("false");
        }
    }


    function reverseNumber(number) {
        let reversedValue = '';
        
        while (number > 0) {
            let lastDigit = number % 10;
            reversedValue += lastDigit;
            number = parseInt((number / 10));
        }
        return Number(reversedValue);
    }
}

solve([123,323,421,121]);