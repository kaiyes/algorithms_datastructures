function findOne(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(i)
      return i
    }
  }
  return -1
}

findOne([1, 12, 33, 123, 112, 11, 22, 44, 55, 666, 4], 1)
