function equalSum(arr) {
  let result = "no";

  for (let index = 0; index < arr.length; index++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < index; i++) {
      //Calculationg left sum
      let leftNum = arr[i];
      leftSum += leftNum;
    }
    for (let i = index + 1; i < arr.length; i++) {
      //Calculating right sum
      let rightNum = arr[i];
      rightSum += rightNum;
    }
    if (leftSum === rightSum) {
      result = index;
      break;
    }
  }
  console.log(result);
}

equalSum([1, 2, 3, 3]);

