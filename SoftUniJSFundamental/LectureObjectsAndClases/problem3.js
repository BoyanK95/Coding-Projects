function converJSONtoObject(json) {
    let object = JSON.parse(json);
    let entries =Object.entries(object)
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}


converJSONtoObject('{"name": "George", "age": 40, "town": "Sofia"}')

