function train(arr) {
  let train = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let command of arr) {
    if (command.includes("Add")) {
      let waggon = command.split(" ")[1];
      train.push(Number(waggon));
    } else {
      let waggon = Number(command);
      for (let i = 0; i < train.length; i++) {
        let currentWaggon = train[i];
        let sum = currentWaggon + waggon;
        if (sum <= maxCapacity) {
          train[i] = sum;
          break;
        }
      }
    }
  }
  console.log(train.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
