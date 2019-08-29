function same() {
  a = [1, 2, 2]
  b = [1, 4, 9]
  let count = 0
  for (let char of a) {
    if (b.includes(Math.pow(char, 2))) {
      count++
    }
  }

  return count == a.length
    ? console.log('true')
    : console.log('false')
}
same()
