/* 
Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

const string = 'HELLO world!';
console.log(reverseCase(string)); // <--- hello WORLD! 
*/

const reverseCase = str => {
  return str
    .split("")
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
};

console.log(reverseCase("HELLO world!")); // 'hello WORLD!'
