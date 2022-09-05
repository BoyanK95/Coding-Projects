function mergeArrays(arr1, arr2) {
    let resultArr = [];

    for(let index in arr1){
        let result;
        if (index % 2 === 0) {
            result = Number(arr1[index]) + Number(arr2[index]);
        }else{
            result = arr1[index] + arr2[index];
        }
        resultArr.push(result);
    }
    console.log(resultArr.join(' - '));
}




mergeArrays(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);

mergeArrays(
  ["13", "12312", "5", "77", "4"],

  ["22", "333", "5", "122", "44"]
);
