function step(number) {
  let char = 1
  while (char < number) {
    console.log('#'.repeat(char))
    char++
  }
}

let res = step(10)

console.log(res)
