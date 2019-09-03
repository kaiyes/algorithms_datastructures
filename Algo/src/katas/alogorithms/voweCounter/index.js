let vowelCounter = str => {
  let counter = 0
  for (let char of str) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      counter++
    }
  }
  console.log(counter)
  return counter
}

let vowelCounter2 = str => {
  console.log(str.match(/[aeiou]/g).length)
  return str.length === 0 ? 0 : str.match(/[aeiou]/g).length
}

let vowelCounter3 = str => {
  let counter = 0
  let checker = 'aeiou'
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++
    }
  }
  return counter
}

let res = vowelCounter3('hellow there')
console.log(res)
