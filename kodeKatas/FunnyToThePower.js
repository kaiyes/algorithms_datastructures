// Given a positive integer n written as abcd...
// (a, b, c, d... being digits) and a positive integer
// p we want to find a positive integer k, if it exists,
// such as the sum of the digits of n taken to the successive
// powers of p is equal to k * n. In other words:
// Is there an integer k such as :
// (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n, p will always be given as strictly positive integers.

function pow(n, p) {
  // convert the number into string
  let str = String(n)
  let sum = 0
  // convert string into array using split()
  str.split('').map(num => {
    sum += Math.pow(num, p)
    p++
  })
  return sum % n ? -1 : sum / n
}

console.log(pow(89, 1))
console.log(pow(92, 1))
console.log(pow(46288, 3))
