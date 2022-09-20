function personalInfo(...input) {
    let person = {
        firstName: input[0],
        lastName: input[1],
        age: input[2]
    }
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

personalInfo("Peter", "Pan", "20");
