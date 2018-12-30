/* 
Write a function called reverseNumber that reverses a number.

Input Example: 
12345
555

Output Example:  
54321
555 
*/

function reverseNumber(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}

console.log(reverseNumber(12345));
