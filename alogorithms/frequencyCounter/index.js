function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }

  let fc1 = {}
  let fc2 = {}
  for (let val of arr1) {
    fc1[val] = (fc1[val] || 0) + 1
  }
  for (let val of arr2) {
    fc2[val] = (fc2[val] || 0) + 1
  }
  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return console.log('false')
    }
    if (fc2[key ** 2] != fc1[key]) {
      return console.log('false')
    }
  }
  return console.log('true')
}

same([1, 8, 3], [1, 4, 9])
