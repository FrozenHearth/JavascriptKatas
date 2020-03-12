const openOrSenior = (...memberDetails) => {
  // Using spread operator to accept multiple arrays as input
  const membershipCategories = memberDetails.map(details => {
    const [age, handicapLevel] = details; // Get the first and second elements of each array (age & handicapLevel)
    let output = [];
    age > 55 && handicapLevel > 7
      ? output.push('Senior')
      : age !== 55 && handicapLevel <= 7
      ? output.push('Open')
      : '';
    // Reducing the output array into one.
    return output.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  });
  return membershipCategories;
};
