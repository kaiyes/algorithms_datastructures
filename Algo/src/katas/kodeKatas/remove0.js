var moveZeros = function(arr) {
  for (let char of arr) {
    if (char === 0) {
      // take them out
      arr.splice(arr.indexOf(char), 1)
      // put em in the end
      arr.push(0)
    }
  }
  console.log(arr)
  return arr
}

let moveZeros2 = function(arr) {
  return arr
    .filter(function(x) {
      return x !== 0
    })
    .concat(
      arr.filter(function(x) {
        return x === 0
      })
    )
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])
