const loose_change = input => {
  const quarters = 25,
    dimes = 10,
    nickels = 5,
    pennies = 1;

  let currency = {
    Nickels: 0,
    Pennies: 0,
    Dimes: 0,
    Quarters: 0
  };

  if (input <= 0) {
    return currency;
  }

  if (input % 1 !== 0) {
    input = Math.floor(input);
  }

  let remainder;
  remainder = input % quarters;
  const quotient = Math.round(input / quarters);
  currency.Quarters = quotient;

  if (remainder > 0) {
    if (remainder >= dimes && remainder < quarters) {
      const secondQuotient = Math.round(remainder / dimes);
      remainder = remainder % dimes;
      currency.Dimes = secondQuotient;
    }
    if (remainder >= nickels && remainder < dimes) {
      const thirdQuotient = Math.round(remainder / nickels);
      remainder = remainder % nickels;
      currency.Nickels = thirdQuotient;
    }
    if (remainder >= pennies && remainder < nickels) {
      const fourthQuotient = Math.round(remainder / pennies);
      remainder = remainder % pennies;
      currency.Pennies = fourthQuotient;
    }
  }
  return currency;
};
