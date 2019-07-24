var countBits = function(n) {
  let count = 0
  n.toString(2)
    .split('')
    .map(val => {
      val == 1 ? count++ : null
    })
  return count
}

console.log(countBits(10))

// ALTERNATIVE SOLUTIONS
// ===========================

// return n !== 0 ? n.toString(2).match(/1/g).length:0;
// return (n.toString(2).match(/1/g) || []).length;

// return n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);

// n =>
//   n
//     .toString(2)
//     .split('')
//     .filter(ele => ele == 1).length
