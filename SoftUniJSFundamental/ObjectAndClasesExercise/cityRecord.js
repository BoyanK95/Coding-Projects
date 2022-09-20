function cityRecord(...params) {
    let city = {
        name: params[0],
        population: params[1],
        treasury: params[2]
    }
    return city
}

cityRecord('Tortuga', 7000, 15000)