function magicSum(arr, num) {
  for (let index = 0; index < arr.length; index++) {
    let firstNum = arr[index];
    for (let i = index + 1; i < arr.length; i++) {
      let secondNum = arr[i];
      let sum = firstNum + secondNum;
      if (sum === num) {
        console.log(`${firstNum} ${secondNum}`);
      }
    }
  }
}

magicSum(
  [1, 7, 6, 2, 19, 23],

  8
);

magicSum(
  [1, 2, 3, 4, 5, 6],

  6
);
