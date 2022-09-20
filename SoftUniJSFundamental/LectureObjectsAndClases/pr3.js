function convertToObj(json) {
    let town = JSON.parse(json);
    
    for (const key in town) {
        console.log(`${key}: ${town[key]}`);
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')