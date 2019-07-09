let stringReversal = () => {
  let str = 'apple'
  let arr = str.split('')
  let revArr = arr.reverse()
  let reversed = revArr.join('')
  console.log(reversed)
}

export default stringReversal
