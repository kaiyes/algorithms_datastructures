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

function queueTime2(customers, n) {
  var w = new Array(n).fill(0)
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w))
    w[idx] += t
  }
  return Math.max(...w)
}

function queueTime3(customers, n) {
  let tills = Array(n).fill(0)

  customers.forEach(customer => {
    let nextTill = tills.indexOf(Math.min(...tills))
    tills[nextTill] += customer
  })

  return Math.max(...tills)
}

let queue = []

const queueTime4 = (customers, n) => {
  let remaining = customers.slice().reverse()
  let count = 0

  while (queue.length || remaining.length) {
    count = count + 1

    // add new workers to queue if slots available
    while (queue.length < n && remaining.length) {
      queue.push(remaining.splice(-1)[0])
    }

    // iterate workers in queue and empty complete workers
    queue = queue.reduce((result, worker) => {
      worker -= 1

      if (worker > 0) {
        result.push(worker)
      }

      return result
    }, [])
  }

  return count
}

function queueTime5(customers, n) {
  if (!customers || customers.length === 0) return 0
  if (customers.length <= n)
    return Math.max.apply(null, customers)
  var pool = Array.from({ length: n }).map(v => 0),
    i = 0,
    len = customers.length,
    min
  for (; i < len; i++) {
    min = Math.min.apply(null, pool)
    pool[pool.lastIndexOf(min)] += customers[i]
  }
  return Math.max.apply(null, pool)
}

function queueTime6(customers, n) {
  return Math.max(
    ...customers.reduce((prev, next) => {
      prev[prev.indexOf(Math.min(...prev))] += next
      return prev
    }, Array(n).fill(0))
  )
}

function queueTime7(customers, n) {
  var isAttended = false
  var maxTime = 0

  var tillsArr = []
  for (let i = 0; i < n; i++) {
    tillsArr.push({ isBusy: false, time: 0, id: i })
  }

  customers.forEach(customer => {
    isAttended = false
    tillsArr.forEach(till => {
      if (!till.isBusy && !isAttended) {
        console.log('empty till filled')
        isAttended = true
        till.isBusy = true
        till.time += customer
      }
    })
    if (!isAttended) {
      tillsArr.sort(function(a, b) {
        return a.time - b.time
      })
      tillsArr[0].time += customer
    }
  })
  tillsArr.sort(function(a, b) {
    return b.time - a.time
  })
  maxTime = tillsArr[0].time
  return maxTime
}

function queueTime8(customers, n) {
  return Math.max(
    ...customers.reduce((acc, c) => {
      let i = acc.indexOf(Math.min(...acc))
      acc[i] = acc[i] + c
      return acc
    }, Array(n).fill(0))
  )
}

function queueTime9(customers, n) {
  var heap = Array.apply(Array, { length: n }).map(() => 0)
  for (var customer of customers) {
    heap[0] += customer
    let parentIdx = 0,
      childIdx
    while (
      (childIdx = (parentIdx + 1) * 2 - 1) < heap.length
    ) {
      if (
        childIdx + 1 < heap.length &&
        heap[childIdx] > heap[childIdx + 1]
      ) {
        childIdx += 1
      }
      if (heap[parentIdx] <= heap[childIdx]) {
        break
      }
      ;[heap[childIdx], heap[parentIdx]] = [
        heap[parentIdx],
        heap[childIdx],
      ]
      parentIdx = childIdx
    }
  }
  return Math.max.apply(Math, heap)
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

function queueTime11(c, n) {
  return c.length
    ? Math.max(
        ...c
          .slice(n)
          .reduce(
            (t, q) => (
              (t[t.indexOf(Math.min(...t))] += q), t
            ),
            c.slice(0, n)
          )
      )
    : 0
}

function queueTime12(customers, n) {
  if (!customers.length || !n) {
    return 0
  }
  let tills = new Array(n).fill(0)
  customers.map(customer => {
    let shortest = tills.indexOf(Math.min(...tills))
    tills[shortest] += customer
  })
  return Math.max(...tills)
}

let res = queueTime1([10, 3, 4, 1], 2)

console.log(res)
