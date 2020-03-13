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
    // If entered currency is 0 or a negative value, return the default currency values
    return currency;
  }

  if (input % 1 !== 0) {
    // if input is float, round it down to the nearest value
    input = Math.floor(input);
  }

  let remainder;
  remainder = input % quarters;
  const quotient = Math.floor(input / quarters);

  currency.Quarters = quotient;

  if (remainder > 0) {
    if (remainder >= dimes && remainder < quarters) {
      const secondQuotient = Math.floor(remainder / dimes);
      remainder = remainder % dimes;
      currency.Dimes = secondQuotient;
    }
    if (remainder >= nickels && remainder < dimes) {
      const thirdQuotient = Math.floor(remainder / nickels);
      remainder = remainder % nickels;
      currency.Nickels = thirdQuotient;
    }
    if (remainder >= pennies && remainder < nickels) {
      const fourthQuotient = Math.floor(remainder / pennies);
      remainder = remainder % pennies;
      currency.Pennies = fourthQuotient;
    }
  }
  return currency;
};
