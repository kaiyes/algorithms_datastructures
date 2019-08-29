function duplicateCount(text) {
  let bag = {}

  let lowerCased = text.toLowerCase()
  let arr = lowerCased.split('')
  duplicates = []
  for (let char of arr) {
    bag[char] ? bag[char]++ : (bag[char] = 1)
  }
  for (let char in bag) {
    if (bag[char] > 1) {
      duplicates.push(bag[char])
    }
  }
  return duplicates.length
}

// function duplicateCount(str) {
//   try {
//     return str
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('')
//       .match(/(.)\1+/g).length
//   } catch (e) {
//     return 0
//   } // if TypeError
// }

duplicateCount('abcdefghijklABCDEFabcdeABCDABCaba')
