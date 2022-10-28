function gradingStudents(grades) {
    let result = []
    let numOfGrades = grades.shift(grades)
    
    for (let grade of grades) {
        if (grade < 38) {
            result.push(grade)
        }else {
            let nextDivByFive = Math.ceil(grade/5) * 5;
            let difference = nextDivByFive - grade;
            if (difference < 3) {
                result.push(nextDivByFive)
            }else{
                result.push(grade)
            }
        }

    }
    return result
}

console.log(gradingStudents([4,73,67,38,33]))