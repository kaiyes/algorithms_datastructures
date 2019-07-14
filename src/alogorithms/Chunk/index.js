let chunk = (arr, size) => {
  console.log(arr, size)
  let chunked = []
  for (let element of arr) {
    let last = chunked[chunked.length - 1]
    if (!last || last.length == size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  console.log(chunked)
  return chunked
}

export default chunk
