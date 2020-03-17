const findLongest = str => {
  let count = 0;
  let arr = str.split('');
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push('(');
    }
    for (let j = 0; j < stack.length; j++) {
      if (arr[i] === ')' && stack[j] === '(') {
        count = count + 2;
        stack.pop();
      }
    }
  }

  return count;
};
