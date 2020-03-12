const scale = (str, k, v) => {
  if (str === '') {
    return '';
  } else {
    const string = str
      .split('')
      .map(el => el.repeat(k)) // Iterate over the string and repeat each character k times (horizontal scaling)
      .join('')
      .split('\n') // Split the string into substring of group of characters before \n
      .map(el => el.repeat(v)) // Iterate over the horizontally scaled string and repeat it v times (vertical scaling)
      .join('\n');
    return string;
  }
};
