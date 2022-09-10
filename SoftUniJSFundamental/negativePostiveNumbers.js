function solve(arr) {
    let newArr = []
    for(let number of arr){
        if (number < 0) {
            newArr.unshift(number);
        }else {
            newArr.push(number)
        }
    }
    for(let element of newArr){
        console.log(element);
    }

}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);