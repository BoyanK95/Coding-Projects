function calculator(num1, num2, operator) {
  switch (operator) {
    case "multiply":
      let multiply = (a, b) => a * b;
      console.log(multiply(num1, num2));
      break;
    case "divide":
      let divide = (a, b) => a / b;
      console.log(divide(num1, num2));
      break;
    case "add":
      let add = (a, b) => a + b;
      console.log(add(num1, num2));
      break;
    case "subtract":
      let subtract = (a, b) => a - b;
      console.log(subtract(num1, num2));
      break;
  }
}

calculator(50, 13, "subtract");

function calculator2(number1, number2, oper) {
  let operation = null;
  switch (oper) {
    case "divide":
      operation = (a, b) => a / b;
      break;
    case "add":
      operation = (a, b) => a + b;
      break;
    case "multiply":
      operation = (a, b) => a * b;
      break;
    case "subtract":
      operation = (a, b) => a - b;
      break;
  }
  let result = operation(number1, number2);
  console.log(result);
}

calculator2(50, 13, "subtract");
