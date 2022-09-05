// function solve(arr) {
//   let result = "";
//   let count = 0

//   for (let index in arr) {
//     let firstNum = arr[index];
//     let secondNum = arr[Number(index) + 1];
//     if (firstNum === secondNum) {
//       result += `${firstNum} `;
//       count++
//     }
//   }
//   console.log(result);
// }

// solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

// solve([1, 1, 1, 2, 3, 1, 3, 3]);

function solve(arr) {
  
  let bestSequance = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let currentSequance = [element];
    

    for (let i = index + 1; i < arr.length; i++) {
      let nextElement = arr[i];
      
      

      if (element === nextElement) {
        currentSequance.push(nextElement);
        index = i;
      } else {
        break;
      }
    }
    if (currentSequance.length > bestSequance.length) {
        bestSequance = currentSequance;
    }
  }
  console.log(bestSequance.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
