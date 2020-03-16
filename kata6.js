const ipToInt32 = ip => {
  let binaryIP = ip
    .split('.') // Break the string into comma separated substrings
    .map(el => parseInt(el).toString(2)) // Iterate over the substrings, convert into a decimal value
    .map(el => '00000000'.substring(el.length) + el) // Pad the substrings with leading 0s to represent it as an octet value
    .join(''); // Join the substring and return as a single string

  return parseInt(binaryIP, 2); // Convert the binary representation into a 32-bit integer
};
