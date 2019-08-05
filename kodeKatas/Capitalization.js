let capitalization = str => {
  let words = str.split(' ')
  let newArr = []
  for (let word of words) {
    newArr.push(word.replace(word[0], word[0].toUpperCase()))
  }
  return newArr.join(' ')
}

let res = capitalization('a short function')
console.log(res)
