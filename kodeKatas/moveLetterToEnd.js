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

moveLetter2 = s =>
  s
    .split(' ')
    .map(e => e.substr(1) + e[0] + 'ed')
    .join(' ')

function moveLetter3(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ed$3')
}

moveLetter3('This is my string !')
console.log(moveLetter3('This is my string !'))
