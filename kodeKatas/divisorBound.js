// PROBLEM : write a function that gives the sum of a row
//           1
//         3  5
//       7  9  11
// rowSum(1) = 1
// rowSum(2) = 8
// rowSum(50) = ?

function rowSumOddNumbers(n) {
  let array = [];
  for (var i = 1; i < n; i + 2) {
    array.push(i);
  }
  console.log(array);
  return array;
}

// ########################## Other Methods ##########################

// reduce should work here

console.log(rowSumOddNumbers(4));