const openOrSenior = (...memberDetails) => {
  // Using spread operator to accept multiple arrays as input

  const membershipCategories = memberDetails[0]
    .map(details => {
      const [age, handicapLevel] = details;
      // Get the first and second elements of each array (age & handicapLevel)

      let output = [];
      if (age >= 55 && handicapLevel > 7) {
        output.push('Senior');
      } else if (
        (age < 55 && handicapLevel <= 7) ||
        (age > 55 && handicapLevel <= 7) ||
        (age >= 55 && handicapLevel <= 7) ||
        (age < 55 && handicapLevel > 7)
      ) {
        output.push('Open');
      } else {
        return;
      }
      // Reducing the output array into one.

      return output.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        ''
      );
    })
    .filter(el => el); // Remove undefined values

  return membershipCategories;
};
