function distincArr(arr) {
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        let firstNumber = arr[i];
        for (let j = 1; j < arr.length; j++) {
            let secondNumber = arr[j];
            if (firstNumber === secondNumber) {
                arr.pop(firstNumber);
            }
        }
    }
    console.log(arr);
        

}

distincArr([1, 2, 3, 4]);
distincArr([7, 8, 9, 7, 2, 3,  4, 1, 2])