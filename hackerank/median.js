function findMed(arr) {
    arr.sort((a,b)=> a - b)
    let index = Math.floor(arr.length/2)
    return arr[index]
}

console.log(findMed([0, 1, 2, 4, 6, 5,3]))