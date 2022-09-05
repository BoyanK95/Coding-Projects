// function solve(num) {
//     let count = Math.sqrt(num);

//     let char = "*";
//     let stars = char.repeat(count)

//     console.log(stars);
// }

// solve(64);

function mathPower(num, power) {
    let result = num;
    for (let i = 1; i < power; i++) {
        result *= num  ;
    }
    console.log(result);
}

mathPower(3, 4);
mathPower(2, 8);



