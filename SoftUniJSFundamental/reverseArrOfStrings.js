function solve(arr) {
    let result = [];
    let textResult = '';
    let swapOpperations = Math.ceil(arr.length / 2);

    for (let i = 0; i < swapOpperations; i++) {
        result[i] = arr[arr.length -1 - i];
        result[arr.length - 1 - i] = arr[i];
        
    }
    for (const element of result) {
        textResult += element + ' ';

    }
    console.log(textResult);
}

solve(['a', 'b', 'c', 'd', 'e']);