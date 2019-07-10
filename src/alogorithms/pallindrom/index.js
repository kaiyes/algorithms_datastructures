let pallindrom = () => {
  let str = 'apple'
  let output = str
    .split('')
    .reverse()
    .join('')
  console.log(output)
}

export default pallindrom
