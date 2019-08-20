// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function sumNums(x, y) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x + y;

  return (function(sum) {
    console.log(`The sum of ${x} and ${y} is ${sum}`)
  })(result);
}
sumNums(3, 6);


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let count = 0;

  return function counter() {
    return ++count; 
  }
};
// Example usage: 
// const myCounter = counterMaker();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const improvedCounterMaker = () => {
  let count = 0;
  let limit = 5;

  return function counter() {
    count = count >= limit ? 1 : ++count;
    return count; 
  }
};
// Example usage: 
// const myCounter = improvedCounterMaker();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// console.log(myCounter()); // 3
// console.log(myCounter()); // 4
// console.log(myCounter()); // 5
// console.log(myCounter()); // 6
// console.log(myCounter()); // 7


// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function() {
      return ++counter;
    },
    decrement: function() {
      return --counter;
    }
  }
};

// const myCounter = counterFactory();
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.decrement());