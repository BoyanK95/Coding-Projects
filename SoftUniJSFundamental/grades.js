function grades(grade) {
    if (grade >= 2 && grade <=2.99) {
        console.log( `Fail (2)`);
    }
    else if(grade >= 3 && grade <= 3.49){
        console.log( `Poor (${grade.toFixed(2)})`);
    }
    else if(grade >= 3.50 && grade <= 4.49){
        console.log( `Good (${grade.toFixed(2)})`);
    }
    else if(grade >= 4.50 && grade <= 5.49){
        console.log( `Very good (${grade.toFixed(2)})`);
    }
    else if(grade >= 5.50 && grade <= 6){
        console.log( `Excellent (${grade.toFixed(2)})`);
    }
}

grades(3.33);
grades(4.5);
grades(2.99);