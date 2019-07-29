function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY // smaller than all other numbers

  for (let num of nums) {
    if (num > max_num) {
      max_num = num
      // num = max_num =>becomes NEGATIVE_INFINITY
      // max_num += 1  still NEGATIVE_INFINITY because adding 1 twice to NEGATIVE_INFINITY is still miniscule
      // max_num += num  ''-
    }
  }
  console.log(max_num)
  return max_num
}

find_max([3, 2, 1, 5, 111])
