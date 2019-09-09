// function fib(n) {
//   if (n <= 2) return 1
//   let res = fib(n - 2) + fib(n - 1)
//   return res
// }

// memoization
function fib_memo(n, memo = []) {
  if (memo[n] != undefined) return memo[n]
  if (n <= 2) return 1
  let res = fib_memo(n - 2, memo) + fib_memo(n - 1, memo)
  memo[n] = res
  return res
}

// console.log(fib(6))
console.log(fib_memo(100))
