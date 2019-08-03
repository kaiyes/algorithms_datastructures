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

function queueTime(customers, n) {
  var peopleAtCounters = new Array(n).fill(0)
  for (let char of customers) {
    let idx = peopleAtCounters.indexOf(
      Math.min(...peopleAtCounters)
    )
    peopleAtCounters[idx] += char
  }
  return Math.max(...peopleAtCounters)
}

function queueTime10(customers, n) {
  var minutes = 0
  while (customers.length > 0) {
    var t = n
    for (var i = 0; i < t && i < customers.length; i++) {
      if (--customers[i] === 0) {
        customers.splice(i--, 1)
        t--
      }
    }
    minutes++
  }
  return minutes
}

let res = queueTime([10, 3, 4, 1], 2)

console.log(res)
