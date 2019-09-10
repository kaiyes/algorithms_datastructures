// return the shortest word's length in an array

function findShort(str) {
  // split the string
  // reduce it

  const words = str.split(' ')
  let bag = {}
  for (word of words) {
    if (!bag[word]) {
      bag[word] = word.length
    }
  }
  return Object.values(bag).reduce((acc, val) =>
    acc > val ? val : acc
  )
}

s =
  'turns out random test cases are easier than writing out basic ones'

console.log(findShort(s))
