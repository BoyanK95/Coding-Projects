function city(name, area, population, country, postcode) {
    let city = {};

    city.name = name;
    city.area = area;
    city.population = population;
    city.country = country;
    city.postCode = postcode;
    
    // for (const key in city) {
    //     console.log(`${key} -> ${city[key]}`);
    // }
    let text = JSON.stringify(city);
    console.log(text);
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000");

console.log("--------------");

city("Plovid"," 452", "1345311", "Thailand", "2000");