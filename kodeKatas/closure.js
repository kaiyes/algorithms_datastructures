const memoTest = () => {
  let cache = {}
  console.log(cache)
  return n => {
    if (n in cache) {
      console.log('cached')
      return n
    } else {
      console.log('not cached')
      let res = n * 10
      cache[n] = res
      return res
    }
  }
}
const labelForClosure = memoTest()

console.log(labelForClosure(10))
