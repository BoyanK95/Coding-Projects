// function maxNum(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let firstNum = arr[i];
//     let secondNum = arr[i + 1];
//     if (firstNum > secondNum || secondNum == undefined) {
//       newArr.push(firstNum);
//     }
//   }
//   console.log(newArr.join(" "));
// }

// maxNum([1, 4, 3, 2]);
// maxNum([41, 41, 34, 20]);

function maxNum2(arr) {
    let result = "";

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let isBigger = true;

    for (let i = index + 1; i < arr.length; i++) {
      let nextElement = arr[i];
      if (element < nextElement) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
        result += `${element} `;
    }
  }
  console.log(result);
}

maxNum2([1, 4, 3, 2]);
