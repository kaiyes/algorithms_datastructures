/* There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free. So, for example:

queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.
N.B. You should assume that all the test input will be valid, as specified above.
 */
let queueTime1 = (people, counterNumber) => {
  // because we don't want to mutate the original arr
  // just a good practise
  let peopleAtWaitingLine = people.slice(0)
  let peopleAtCounter = peopleAtWaitingLine.splice(
    0,
    counterNumber
  )
  let totalTime = 0
  let checker = true
  while (checker) {
    for (let char of peopleAtCounter) {
      if (char > 0) {
        char--
      }
      if (char === 0 && peopleAtWaitingLine.length > 0) {
        let index = peopleAtCounter.indexOf(char)
        peopleAtCounter.splice(
          index,
          1,
          peopleAtWaitingLine.shift()
        )
      }
    }
    totalTime++
  }
  return totalTime
}

function queueTime(customers, registers) {
  var onLine = customers.slice(0)
  var checkout = onLine.splice(0, registers)
  var timeAlotted = 0
  var queue = customers.length > 0

  while (queue) {
    var minsLeft = 0
    for (var i = 0; i < checkout.length; i++) {
      if (checkout[i] > 0) {
        checkout[i]--
      }
      if (checkout[i] === 0 && onLine.length > 0) {
        checkout.splice(i, 1, onLine[0]) //remove the person finished checking out and add next person 								    	online to checkout
        onLine.splice(0, 1) //remove the person from the line because now hes at checkout
      }
      minsLeft += checkout[i]
    }
    timeAlotted++
    if (minsLeft === 0) {
      queue = false
    }
  }
  return timeAlotted
}

let res = queueTime1([10, 3, 4, 1], 2)

console.log(res)
