let stringReversal = () => {
  let str = 'apple'
  let output = str
    .split('')
    .reverse()
    .join('')
  console.log(output)
}

let stringReversal2 = () => {
  let str = 'apple'
  let output = ''
  for (let character of str) {
    output = character + output
  }
  console.log(output)
}

let stringReversal3 = () => {
  let str = 'apple'
  let output = str
    .split('')
    .reduce((acc, char) => char + acc, '')
  console.log(output)
}

export default stringReversal3
