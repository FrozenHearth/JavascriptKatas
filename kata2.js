const scale = (str, k, v) => {
  if (str === '') {
    return '';
  }
  const string = str
    .split('')
    .map(item => item.repeat(k))
    // Map over the string and repeat each character k times (horizontal scaling)
    .join('')
    .split('\n') // Split the string into substring of group of characters before \n
    .filter(Boolean) // Remove empty strings
    .map(item => item.concat('\n').repeat(v))
    // Map over the horizontally scaled string, add \n after each substring and repeat it v times (vertical scaling)
    .join('');
  return string;
};
