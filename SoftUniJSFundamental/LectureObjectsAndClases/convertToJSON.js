function covnertToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(person));
}

covnertToJSON('George',

'Jones',

'Brown')