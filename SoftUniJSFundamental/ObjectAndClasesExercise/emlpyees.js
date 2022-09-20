function solve(input) {
  let emplyees = {};

  input.forEach(name => {
    emplyees[name] = name.length;
  });
    for (const name in emplyees) {
        console.log(`Name: ${name} -- Personal Number: ${emplyees[name]}`);
    }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
