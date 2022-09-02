function fuelMoney(distance, passengers, priceOfDiesel) {
    let fuel = (distance /100) * 7
    fuel += passengers * 0.100;
    let money = priceOfDiesel * fuel;

    console.log(`"Needed money for that trip is ${money}lv`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);