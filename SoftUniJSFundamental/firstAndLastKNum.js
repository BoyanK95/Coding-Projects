function solve(arr) {
  let k = arr.shift();

  let firstEl = arr.slice(0, k);
  let lastEl = arr.slice(arr.length - k);

  let firstResult = "";
  let lastResult = "";

  for (let i = 0; i < k; i++) {
    firstResult += ` ${firstEl[i]}`;
    lastResult += ` ${lastEl[i]}`;
  }
  console.log(firstResult);
  console.log(lastResult);
}


solve([2,

    7, 8, 9])
