//find the element that is repeated odd times, there
// is atleas one

function findOdd(A) {
  let bag = {}
  let charMap = A.map(val =>
    bag[val] ? bag[val]++ : (bag[val] = 1)
  )
  // find the kets of odd numbers in object and
  // return the biggest of them
  let newArr = Object.values(bag).filter(val => {
    return val % 2 === 1
  })
  // if (newArr.length === 1 ) {
  // character = newArr[0]
  // }
  let character = Object.keys(bag).find(
    val => bag[val] === newArr[0]
  )
  console.log(parseInt(character))
  return parseInt(character)
}

findOdd([
  20,
  1,
  -1,
  2,
  -2,
  3,
  3,
  5,
  5,
  1,
  2,
  4,
  20,
  4,
  -1,
  -2,
  5,
])
