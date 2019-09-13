// find the longest substring of vowels in a given word.
// for example: warriors has i->o as the longest streak of vowels.

function longestSubString(str) {
  // map/iterate over
  //if a vowel, check if next is vowel too
  // keep the streak number in a variable

  let tempCount = 0
  let longestStreak = 0

  for (letter of str) {
    if ('aeiou'.includes(letter)) {
      tempCount++
      if (tempCount > longestStreak) {
        longestStreak = tempCount
      }
    } else {
      tempCount = 0
    }
  }
  return longestStreak
}

str = 'warriors'

console.log(longestSubString(str))
