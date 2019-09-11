//Problem  return the shortest word's length in an array.
// For example, " wide and long sword" ...
// shortes word length is and.length = 3 so return 3
s =
  'turns out random test cases are easier than writing out basic ones'

// #######################  Reduce #############################
  // split the string.
  //reduce it.
  //provide an acc, Otherwise first value is taken
  //as acc which is just the word, not length.
  function findReduced(s) {
    return s
      .split(' ')
      .reduce(
        (acc, val) => (val.length < acc ? val.length : acc),
        s.split(' ')[0].length
      )
  }



}

// #####################   Iterative ###############################

function findShort(str) {
  // split the string
  // put the words in object map
  // find the min val from objects map

  const words = str.split(' ')
  let bag = {}
  for (word of words) {
    if (!bag[word]) {
      bag[word] = word.length
    }
  }
  return Object.values(bag).reduce((acc, val) =>
    acc > val ? val : acc
  )

function findShort1(s) {
  return Math.min.apply(
    null,
    s.split(' ').map(w => w.length)
  )
}

function findShort2(str) {
  // split the string.
  // iterate over and save smalles somewhere.
  // once and for all - differece between this and the first
  // is that this saves once. But the preivous saves all values
  // in a hash map.
  const words = str.split(' ')
  let smallest = words[0]
  for (word of words) {
    if (word.length < smallest.length) {
      smallest = word
    }
  }
  return smallest.length
}

// #######################  Reduce #############################

function findShort3(s) {
  return s
    .split(' ')
    .map(a => a.length)
    .reduce((a, b) => Math.min(a, b))
}


console.log(findReduced(s))
