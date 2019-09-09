let findUnique = givenArr => {
  const arr = givenArr.sort((a, b) => {
    return a - b
  })
  let bag = {}
  //put items in the bag
  for (let char of arr) {
    bag[char] ? bag[char]++ : (bag[char] = 1)
    // bag[char] = (bag[char] ||  0)+1
  }
  return console.log(Object.keys(bag))
}
findUnique([2, 1, 1, 1, 1, 1, -1, 2, 2, -5, -6])
