let reverseInt = async n => {
  let res = await n
    .toString()
    .split('')
    .reverse()
    .join('')

  let output = (await parseInt(res, 10)) * Math.sign(n)
  return output
}

export default reverseInt
