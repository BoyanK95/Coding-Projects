function order(product, q) {
  function sum(quantity, price) {
    result = quantity * price;
    return result.toFixed(2);
  }
  if (product == "coffee") {
    console.log(sum(q, 1.5));
  } else if (product == "water") {
    console.log(sum(q, 1));
  } else if (product == "coke") {
    console.log(sum(q, 1.40));
  }
  else if (product == "snacks") {
    console.log(sum(q, 2));
  }
}

order("water", 5);
order("coffee", 2);

