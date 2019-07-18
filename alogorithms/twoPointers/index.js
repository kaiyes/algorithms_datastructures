function findPoints(arr) {
  let left = 0
  let right = arr.length - 1
  let sum = arr[left] + arr[right]
  while (left < right) {
    if (sum === 0) {
      console.log(arr[left], arr[right])
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
findPoints([-3, -2, -1, 0, 1, 2, 3])
