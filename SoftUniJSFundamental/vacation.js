function vacation(people, typeOfGroup, dayOfTheWeek) {
  let price = 0;
  if (typeOfGroup == "Students" && dayOfTheWeek == "Friday") {
    price = people * 8.45;
    if (people >= 30) {
      price -= price * 0.15;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else {
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  } else if (typeOfGroup == "Students" && dayOfTheWeek == "Saturday") {
    price = people * 9.80;
    if (people >= 30) {
      price -= price * 0.15;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else {
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  }
  else if (typeOfGroup == "Students" && dayOfTheWeek == "Sunday") {
    price = people * 10.46;
    if (people >= 30) {
      price -= price * 0.15;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else {
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  }
  else if (typeOfGroup == "Business" && dayOfTheWeek == "Friday") {
    price = people * 10.90;
    if (people >= 100) {
      price -= price * 10;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else {
      console.log(`Total price: ${price.toFixed}`);
    }
  }
  else if (typeOfGroup == "Business" && dayOfTheWeek == "Saturday") {
    price = people * 15.60;
    if (people >= 100) {
      price -= price * 10;
      console.log(`Total price: ${price.toFixed}`);
    } else {
      console.log(`Total price: ${price.toFixed}`);
    }
  } else if (typeOfGroup == "Business" && dayOfTheWeek == "Sunday") {
    price = people * 16;
    if (people >= 100) {
      price -= price * 10;
      console.log(`Total price: ${price.toFixed}`);
    } else {
      console.log(`Total price: ${price.toFixed}`);
    }
  }
  else if (typeOfGroup == "Regular" && dayOfTheWeek == "Friday") {
    price = people * 15;
    if (people >= 10 && people <= 20) {
      price -= price * 0.5;
      console.log(`Total price: ${price.toFixed}`);
    } else {
      console.log(`Total price: ${price.toFixed}`);
    }
  }
  else if (typeOfGroup == "Regular" && dayOfTheWeek == "Saturday") {
    price = people * 20;
    if (people >= 10 && people <= 20) {
      price -= price * 0.5;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else {
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  }
  else if (typeOfGroup == "Regular" && dayOfTheWeek == "Sunday") {
    price = people * 22.50;
    if (people >= 10 && people <= 20) {
      price -= price * 0.5;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else {
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  }

}


vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday")
