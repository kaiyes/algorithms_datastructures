function fib(n) {
  if (n <= 2) return 1
  let res = fib(n - 2) + fib(n - 1)
  return res
}

// memoization
function fib_memo(n, memo = []) {
  if (memo[n] != undefined) return memo[n]
  if (n <= 2) return 1
  let res = fib_memo(n - 2, memo) + fib_memo(n - 1, memo)
  memo[n] = res
  return res
}

function fib_memo_easy() {
  let memo = {}
  function fib(n) {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    const res = fib(n - 1) + fib(n - 2)
    memo[n] = res
    return res
  }
  return fib
}

const callingClosure = fib_memo_easy()
// console.log(fib(6))
console.log(callingClosure(100))
