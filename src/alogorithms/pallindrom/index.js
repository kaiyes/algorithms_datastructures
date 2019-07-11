let pallindrom = async w => {
  let output = await w
    .split('')
    .reverse()
    .join('')
  console.log(output)
  if (output === w) {
    return 'True'
  } else {
    return 'False'
  }
}

export default pallindrom
