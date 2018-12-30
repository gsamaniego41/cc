/* 
Write a function called commonElements that has parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

Input Example:  

[1, 2, 3, 4] [3, 4, 5, 6]
['a', 'b', 'c'] ['x', 'y', 'z', 'a']
[1, 2, 3] [4, 5, 6]

Output Example:  

[3, 4]
['a']
[] 
*/

function commonElements(arr1, arr2) {
  let commonEl = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonEl.push(arr1[i]);
    }
  }
  return commonEl;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3,4]
console.log(commonElements(["a", "b", "c"], ["x", "y", "z", "a"])); // [a]
console.log(commonElements([1, 2, 3], [4, 5, 6])); // []
