let student = {
    name: 'Ivan',
    age: 18,
    bodytype: 'Ektomorph'
};

let otherObj = {
    address: 'Rakovski 34',
    city: 'Sofia'
};

let newStudent = Object.assign(student, otherObj)

console.log(newStudent);