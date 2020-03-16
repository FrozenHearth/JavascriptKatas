const scale = (str, k, v) => {
  if (str === '') {
    return '';
  } else {
    const scaledString = str
      .split('\n')
      .map(item =>
        item
          .split('')
          .map(item => item.repeat(k)) // Map over the string and repeat each character k times (horizontal scaling)
          .join('')
      )
      .map(
        item =>
          (item + ' ') // Add whitespace after each substring
            .repeat(v) // Map over the horizontally scaled string and repeat it v times (vertical scaling)
            .trim() // Remove whitespace after end of each set of repeated substrings.
            .replace(/ /g, '\n') // Replace all remaining whitespaces with newline
      )
      .join('\n');
    return scaledString;
  }
};
