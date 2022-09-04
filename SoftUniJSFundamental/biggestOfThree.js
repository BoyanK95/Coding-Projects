function solve(num1, num2, num3) {
    if (num1 >= num2 && num2 >= num3 || num1 >= num3 && num2 <= num3) {
        console.log(num1);
    }
    else if (num2 >= num1 && num1 >= num3 || num2 >= num3 && num1 <= num3) {
        console.log(num2);
    }else if (num3 >= num1 && num1 >= num2  || num3 >= num2 && num2 >= num1) {
        console.log(num3);
    }
}

solve(-2,

    7,
    
    3);

    solve(130, 5, 99)

    solve(2,2,2)