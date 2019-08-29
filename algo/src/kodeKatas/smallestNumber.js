function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers))
  return [
    ...numbers.slice(0, indexOfMin),
    ...numbers.slice(indexOfMin + 1),
  ]
}

function removeSmallest2(numbers) {
  const min = Math.min.apply(this, numbers)
  return numbers.filter(
    (num, idx, arr) => idx !== arr.indexOf(min)
  )
}

const removeSmallest3 = numbers =>
  numbers.filter(
    (n, i) => i !== numbers.indexOf(Math.min(...numbers))
  )

removeSmallest([250, 176, 70, 49, 56, 271, 129])
