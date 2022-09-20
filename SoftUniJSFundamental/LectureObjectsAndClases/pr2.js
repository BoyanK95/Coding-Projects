function city(...input) {
  let city = {};

  city.name = input[0];
  city.area = input[1];
  city.population = input[2];
  city.country = input[3];
  city.postCode = input[4];

  for (const key in city) {
    console.log(`${key} -> ${city[key]}`);
  }
}

city("Sofia", " 492", "1238438", "Bulgaria", "1000");
