function rotationOfArray(arr, rot) {
  let rotations = rot % arr.length;
  let resultArr = [];

  for(let index in arr){
    if (index >= rotations) {
        let element = arr[index];
        resultArr.push(element);
    }
  }

  for (let index in arr) {
    if (index < rotations) {
      let element = arr[index];
      resultArr.push(element);
    } else {
      break;
    }
  }
  console.log(resultArr.join(" "));
}

rotationOfArray([51, 47, 32, 61, 21], 2);
rotationOfArray([32, 21, 61, 1], 4);
