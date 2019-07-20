function findOne(arr, num) {
  let index = 0
  for (let char of arr) {
    if (char == num) {
      console.log(index)
      return index
    }
    index++
  }
  return false
}

findOne([1, 12, 33, 123, 12, 11, 22, 44, 55, 666, 4], 33)
