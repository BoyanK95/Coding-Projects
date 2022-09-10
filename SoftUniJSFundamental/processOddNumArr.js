function process(arr) {
  let newArr = [];
  for (let index in arr) {
    let element = arr[index];

    if (index % 2 !== 0) {
      newArr.unshift(element);
    }
  }
  let resultArr = newArr.map((a) => a * 2);
  console.log(resultArr.join(" "));
}

process([10, 15, 20, 25]);
process([3, 0, 10, 4, 7, 3])
