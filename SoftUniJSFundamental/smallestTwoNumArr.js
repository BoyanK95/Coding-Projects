function smallestTwoNumInArr(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let result = sortedArr.slice(0, 2);

    console.log(result.join(" "));
}

smallestTwoNumInArr([30, 15, 50, 5]);
smallestTwoNumInArr([3, 0, 10, 4, 7, 3]);
