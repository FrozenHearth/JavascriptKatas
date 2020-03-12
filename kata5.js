const sqrtOfsumOfSquaredDivisors = num => {
  const squaredDivisorsArr = [];
  const result = [];
  for (let i = 0; i <= num; i++) {
    let squaredDivisors = 0;
    if (num % i === 0) {
      // If the remainder is 0, square the divisor and add it to the array
      squaredDivisors = i * i;
      squaredDivisorsArr.push(squaredDivisors);
    }
  }
  const squaredDivisorsSum = squaredDivisorsArr.reduce((a, c) => a + c);
  const squareRoot = Math.sqrt(squaredDivisorsSum);
  if (squareRoot % 1 === 0) {
    // Checking if the squareroot is an integer
    result.push(num, squaredDivisorsSum);
  } else {
    // If it is not an integer, break
    return;
  }
  return result;
};

const listSquared = (firstNum, secondNum) => {
  const finalList = [];
  for (let i = firstNum; i < secondNum; i++) {
    finalList.push(sqrtOfsumOfSquaredDivisors(i));
  }
  return finalList.filter(el => el); // Remove undefined values
};
