// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum", "Gum"];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  firstItem(items, function(first) {
    console.log(first)
  });
*/

const logger = param => `Logger callback: ${param}`;

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
console.log(getLength(items, logger));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
console.log(last(items, logger));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
console.log(sumNums(5, 4, logger));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
console.log(multiplyNums(3, 5, logger));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return list.includes(item) ? true : false;
}
console.log(contains("Gum", items, logger));

/* STRETCH PROBLEM */

/* function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
} */
function removeDuplicates(array, cb) {
  return cb([...new Set(array)]);
}
console.log(removeDuplicates(items, logger));
