let moveLetter = str => {
  // console.log(str.split(' '))
  let arr = str.split(' ')
  let newArr = []
  for (let word of arr) {
    if (/[?!.]/.test(word)) {
      newArr.push(word)
      let changed = newArr.join(' ')
      console.log(changed)
      return changed
    }
    let newWord = word
      .slice(1, word.length)
      .concat(word[0], 'ed')
    newArr.push(newWord)
  }
  let changed = newArr.join(' ')
  console.log(changed)
  return changed
}

moveLetter('This is my string !')
