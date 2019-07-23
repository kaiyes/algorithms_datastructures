let isBalanced = braces => {
  let stack = []
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (const char of braces) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      let last = stack.pop()
      if (char != obj[last]) {
        console.log('false')
        return false
      }
    }
  }
  if (stack.length != 0) {
    console.log('false')
    return 'false'
  }
  console.log('true')
  return true
}
isBalanced('({(()))}}')
