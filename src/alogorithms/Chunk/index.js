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
  return chunked
}

let chunked = () => {
  arr = [1, 2, 3, 4, 5, 6, 7, 8]
  size = 3
  const chunkedArr = []
  let i = 2
  while (i <= arr.length) {
    chunkedArr.push(arr.slice(i, i + size))
    i += size
  }
  console.log(chunkedArr)
  return chunkedArr
}

export default chunked
