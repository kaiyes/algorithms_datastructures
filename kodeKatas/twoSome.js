let twoSum = (nums, target) => {
  let i = 0
  let j = nums.length - 1
  for (let char of nums) {
    sum = Math.abs(nums[i]) + Math.abs(nums[j])
    target = Math.abs(target)
    if (sum === target) {
      console.log([nums[i], nums[j]])
      return [i, j]
    } else if (sum > target) {
      j--
    } else if (sum < target) {
      i++
    }
  }
  return []
}

function twoSum2(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != null) {
      return [map[target - nums[i]], i]
    }
    map[nums[i]] = i
  }
}

twoSum2([-1, -2, -3, -4, -5], -8)

// this works since this is sorted
// brute force - loop inside loop
// sliding window method
// 1. take first and last and see if sum === target
// if sum > target, move pointer from right
// else if sum < target move pointer from left
// divide and conquere
// 2. Break Down the arr depending on if middle is greater than sum
