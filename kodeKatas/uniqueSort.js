// only return the unique values from an array
// x = [1,2,1,3]. unique(x) = [1,2,3]

function uniqueSort(x) {
  let seen = []
  for (char of x) {
    let includesChar = seen.includes(char)
    if (!includesChar) {
      seen.push(char)
    }
  }
  return seen.sort((a, b) => a - b)
}

console.log(uniqueSort([1, 3, 1, 2]))
