// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// getLength(items, arrayLen => console.log(`The length of the array is ${arrayLen}`));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
// last(items, item => console.log(`The last item of the array is ${item}`));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x + y;
  return cb(result);
}
// sumNums(2, 3, result => console.log(`The sum of the numbers is ${result}`));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  return cb(result);
}
// multiplyNums(2, 3, result => console.log(`The sum of the numbers is ${result}`));


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let isTrue = list.includes(item);
  return cb(isTrue);
}
/*
  contains('Gum', items, isTrue => {
    console.log(isTrue ? `The item is in the array` : `The item is not in the array`);
  });
*/

/* STRETCH PROBLEM */

const numbers = [1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 6, 9];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let duplicateFreeArray = array.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []);
  return cb(duplicateFreeArray);
}

removeDuplicates(numbers, newArray => console.log(`The new duplicate free array: ${newArray}`));