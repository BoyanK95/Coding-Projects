function solve(...input) {
    let city = {
        name: input[0],
        area: input[1],
        population: input[2],
        country: input[3],
        postCode: input[4]
    }
    let entries = Object.entries(city)
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

solve("Ploviv"," 389", "1238438", "Bulgaria", "1000")