const calculateProperDivisors = i => {
  let arr = [];
  let firstSum = [];
  let secondSum = [];
  let secondArr = [];
  let secondDivisor = 0;
  let result = [];
  for (let j = 0; j < i; j++) {
    if (i % j === 0) {
      arr.push(j);
    }
  }

  firstSum = arr.reduce((a, c) => a + c, 0); // when i = 10, sum = 8

  secondDivisor = firstSum - 1;

  for (let k = 0; k < secondDivisor; k++) {
    if (secondDivisor % k === 0) {
      secondArr.push(k);
    }
  }

  secondSum = secondArr.reduce((a, c) => a + c, 0);

  if (firstSum === secondDivisor + 1 && secondSum === i + 1) {
    result.push(i, secondDivisor);
  }

  if (!result.length) {
    return 'Nothing';
  } else {
    return result;
  }
};

const buddy = (start, limit) => {
  let res;
  for (let i = start; i <= limit; i++) {
    res = calculateProperDivisors(i);
  }
  return res;
};
