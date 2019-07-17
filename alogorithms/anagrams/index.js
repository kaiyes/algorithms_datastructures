// let anagrams = async () => {
//   //clean & make useable strings
//   // Make 2 character map objects
//   // compare these two
//   const stringA = 'APPLE!'
//   const stringB = 'elppaa'
//   let cleanA = await buildCharMap(stringA)
//   let cleanB = await buildCharMap(stringB)
//   console.log(cleanA, cleanB)
//   if (
//     Object.keys(cleanA).length != Object.keys(cleanB).length
//   ) {
//     console.log('false')
//     return false
//   }
//   for (let char in cleanA) {
//     if (cleanA[char] != cleanB[char]) {
//       console.log('false')
//       return false
//     }
//   }
//   console.log('true')
//   return true
// }
//
// let buildCharMap = str => {
//   let charMap = {}
//   for (let char of str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()) {
//     !charMap[char] ? (charMap[char] = 1) : charMap[char]++
//   }
//   return charMap
// }

const anagram = () => {
  strA = 'Apple'
  strB = '!!!  elppa'

  cleanA = strA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
  cleanB = strB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
  console.log(cleanA, cleanB)
  if (cleanA == cleanB) {
    console.log('anagram')
  } else {
    console.log('not')
  }
}

anagram()
