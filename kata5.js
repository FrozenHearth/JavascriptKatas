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

const listSquared = (m, n) => {
  let arr = [];
  for (let i = m; i <= n; i++) {
    let temp = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) temp += j * j;
    }
    if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
  }
  return arr;
};
