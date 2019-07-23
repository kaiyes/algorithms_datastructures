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

return vowelCounter('abrakadabra')
