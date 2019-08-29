let fizBuzz = () => {
  for (var i = 1; i <= 100; i++) {
    if (Number.isInteger(i / 15)) {
      console.log('fizbuzz');
    } else if (Number.isInteger(i / 5)) {
      console.log('fizz');
    } else if (Number.isInteger(i / 3)) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

let fizBuzz2 = () => {
  for (var i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    }
  }
};

console.log(fizBuzz2());
// export default fizBuzz;
