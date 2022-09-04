function solve(length, arr) {
  let resultArr = [];
  let result = "";
  for (let i = 0; i < length; i++) {
    resultArr[i] = arr[i];
  }
  for (let i = length - 1; i >= 0; i--) {
    result += resultArr[i] + " ";
  }
  console.log(result);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
