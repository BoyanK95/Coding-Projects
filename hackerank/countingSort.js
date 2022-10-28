function countingSort(arr) {
    // Write your code here
    let array = new Array(100).fill(0),i=0;
    arr.map(n=>{ array[n]=array[n]+1;});
    return array;
}