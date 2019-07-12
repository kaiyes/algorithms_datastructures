let reverseInt = async n => {
  let sign = Math.sign(n)

  let res = await n
    .toString()
    .split('')
    .reverse()
    .join('')

  let output = await parseInt(res, 10)
  return (await sign) === -1
    ? -Math.abs(output)
    : Math.abs(output)
}

export default reverseInt
