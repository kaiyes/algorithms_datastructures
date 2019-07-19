let longestSubStr = async (s1, s2) => {
  // naive solution
  // =====================
  // loop over first string
  // create a window with i and j
  // "abadc" "bacbad"
  // i == j ?  j ++ : i++
  // i   j
  // abad
  //
  // compare both strings and remove non common chars
  let arr = cleanArr(s1, s2)
  let arr1 = arr[0]
  let arr2 = arr[1]
  console.log(arr)
  let i = 0
  let j = 0
  let substr = []
  while (i < arr1.length) {
    if ((arr1[i] = arr2[j])) {
      i++
      substr.push(arr1[i])
    } else {
      j++
    }
  }
  console.log(substr.join(''))
}

let makeObj = str => {
  bag = {}
  for (let char of str) {
    bag[char] ? bag[char]++ : (bag[char] = 1)
  }
  return bag
}

let cleanArr = (str1, str2) => {
  let s1 = str1.split('')
  let s2 = str2.split('')
  for (let char of s1) {
    if (!s2.includes(char)) {
      s1.splice(s1.indexOf(char), 1)
    }
  }
  for (let char of s2) {
    if (!s1.includes(char)) {
      s2.splice(s2.indexOf(char), 1)
    }
  }
  return [s1, s2]
}

longestSubStr('abazdc', 'bacbad')

// let func = async (s1, s2) => {
//   let str1 = s1
//   let str2 = s2
//   for (let char of str1) {
//     str2.includes(char)
//       ? null
//       : await str1.replace(char, '')
//   }
//   console.log(str2)
//   for (let char of str2) {
//     str1.includes(char) ? null : str2.replace(char, '')
//   }
//   console.log(str1, str2)
// }
