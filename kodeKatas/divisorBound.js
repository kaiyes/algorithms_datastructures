// Problem : Given the bound (final value) and divisor, find the largest number
// that is divisable ( by the divisor, dah) and is within the bound. Is greater
// or equal to the bound.
// Edge case : None. Guranteed that a divisor is found. Positive Ints only
// Example : divisorBound(2,9) = 8.
// 8 is dividable by 2 and is lower than 9

function divisorBound(divisor, bound) {
  const arr = [...Array(bound + 1).keys()]
  largestNum = arr[0]
  arr.map(val => {
    if (val % divisor === 0) {
      if (val > largestNum) {
        largestNum = val
      }
    }
  })
  return largestNum
}

console.log(divisorBound(2, 8))

// ########################## Other methods ##########################

const maxMultiple = (divisor, bound) =>
  bound - (bound % divisor)

// reduce should work here
