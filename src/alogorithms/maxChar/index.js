let maxChar = async word => {
  let bag = {}
  for (let char of word) {
    if (bag[char]) {
      bag[char]++
    } else {
      bag[char] = 1
    }
  }

  // Object.keys(bag).reduce((a, b) => bag[a] > bag[b] ? a : b);

  let arr = Object.values(bag)
  let maxValue = await Math.max(...arr)
  console.log(maxValue)
  for (let char in bag) {
    if (bag[char] === maxValue) {
      return char
    }
  }
}

export default maxChar
