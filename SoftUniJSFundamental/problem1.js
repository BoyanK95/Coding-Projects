// function multiply(num) {
//     console.log(num*2);
// }

// multiply(5)

// function solve(grade) {
//     if (grade >= 5.5) {
//         console.log("Excellent");
//     }
//     else{
//         console.log("Not excellent");
//     }
// }

// solve(5)

// function printOnetoFive() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }
// printOnetoFive();

// function printFromNtoOne(n){
//     while (n>=1) {
//         console.log(n);
//         n-=1;
//     }
// }

// printFromNtoOne(5);

// function prinMtoN(m, n) {
//     for (let i = m; i>=n; i--){
//         console.log(i);
//     }

// }

// prinMtoN(6, 2);

// function solve(name, age, grade) {
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
// }

// solve("John", 15, 5.54678)

// function language(country) {
//   if (country == "England" || country == "USA") {
//     console.log("English");
//   } else if (country == "Spain" || country == "Argentina" || country == "Mexico") {
//     console.log("Spanish");
//   }
//   else{
//     console.log("unknown");
//   }
// }

// language("USA");
// language("Germany");

// function promotion(typeOfDay, age) {

//   if (age >= 0 || (age <= 18 && typeOfDay == "Weekday")) {
//     console.log("12$");
//   } else if (age >= 0 || age <= 18 && typeOfDay == "Weekend") {
//     console.log("15$");
//   } else if (age >= 0 || age <= 18 && typeOfDay == "Holiday") {
//     console.log("5$");
//   } else if (age > 18 || age <= 64 && typeOfDay == "Weekday") {
//     console.log("18$");
//   } else if (age > 18 || age <= 64 && typeOfDay == "Weekend") {
//     console.log("20$");
//   } else if (age > 18 || age <= 64 && typeOfDay == "Holiday") {
//     console.log("12$");
//   } else if (age > 64 || age <= 122 && typeOfDay == "Weekday") {
//     console.log("12$");
//   } else if (age >= 0 || age <= 18 && typeOfDay == "Weekend") {
//     console.log("15$");
//   } else if (age > 64 || age <= 122 && typeOfDay == "Holiday") {
//     console.log("10$");
//   } else {
//     console.log("Error!");
//   }
// }

// promotion(
//   "Weekday",-12
// );


function divisible() {
    for (let i = 1; i <= 100 ; i++) {
        if (i % 3 == true) {
            console.log(i);
        }
    }
}

divisible();