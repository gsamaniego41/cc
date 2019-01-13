/* Implement four functions called multiply, divide, modulo, and negCheck. The first three functions should multiply, divide, or return the remainder of two arguments after invoking negCheck upon the two numbers.

Now for the tricky part: you can only use + and - to implement these functions.
Do not use the JavaScript operators for multiply, divide and modulo: * / %

The negCheck function needs to indicate whether or not the resulting product, quotient and remainder would be positive or negative. Use a Boolean value to indicate this (you can use the not operator ! to toggle the Boolean value.) negCheck should return an array with that Boolean having converted num1 and num2 into positive integers.

Hint: divide should drop the remainder.
NOTE: the test suite will check to see if you are using the * / or % operators. This test will fail if you have commented out code within your functions.
 */

function negCheck(num1, num2) {
  // let product = multiply(num1, num2)
  let arr = [false];
  if (num1 < 0) {
    arr[0] = !arr[0];
    arr.push(-num1); // flips negative to positive
  } else arr.push(num1);
  if (num2 < 0) {
    arr[0] = !arr[0];
    arr.push(-num2); // flips negative to positive
  } else arr.push(num2);
  return arr;
}

function multiply(x, y) {
  const arr = negCheck(x, y);
  let product = 0;
  for (let i = 0; i < y; i++) {
    product += x;
  }
  if (arr[0]) product = -product;
  return product;
}

function divide(x, y) {
  const arr = negCheck(x, y);
  let remainder = arr[1];
  let answer = 0;
  while (remainder >= arr[2]) {
    answer += 1;
    remainder -= arr[2];
  }
  if (arr[0]) answer = -answer;
  return answer;
}

function modulo(x, y) {
  const arr = negCheck(x, y);
  let remainder = arr[1];
  while (remainder >= arr[2]) {
    remainder -= arr[2];
  }
  if (x < 0) return -remainder;
  return remainder;
}

console.log(negCheck(12, 34)); //   <--- [ false, 12, 34 ]
console.log(negCheck(-12, 34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(12, -34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(-12, -34)); // <--- [ false, 12, 34 ]
console.log(multiply(3, 4)); //     <--- 12
console.log(multiply(-3, 4)); //    <--- -12
console.log(multiply(3, -4)); //    <--- -12
console.log(multiply(-3, -4)); //   <--- 12
console.log(divide(10, 3)); //      <--- 3
console.log(divide(-10, 3)); //     <--- -3
console.log(divide(10, -3)); //     <--- -3
console.log(divide(-10, -3)); //    <--- 3
console.log(modulo(10, 3)); //      <--- 1
console.log(modulo(-10, 3)); //     <--- -1
console.log(modulo(10, -3)); //     <--- 1
console.log(modulo(-10, -3)); //    <--- -1
