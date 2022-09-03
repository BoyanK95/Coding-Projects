function gladiatorExpenses(
  lostFight,
  helmetPrice,
  swortPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let shieldBreaks = 0;
  for (let i = 1; i <= lostFight; i++) {
    if (i % 2 == 0) {
      expenses += helmetPrice;
    }
    if (i % 3 == 0) {
      expenses += swortPrice;
    }
    if (i % 2 == 0 && i % 3 == 0) {
      expenses += shieldPrice;
      shieldBreaks++;
      if (shieldBreaks == 2) {
        expenses += armorPrice;
        shieldBreaks = 0;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);

gladiatorExpenses(
  23,

  12.5,

  21.5,

  40,

  200
);
