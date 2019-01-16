/* 
Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"
toCamelCase("The_stealth_warrior")
// returns "TheStealthWarrior" 
*/

const toCamelCase = str => {
  return str.replace(/[-_]([a-z])/gi, (match, captured) =>
    captured.toUpperCase()
  );
};

console.log(toCamelCase("the-stealth-warrior")); // 'theStealthWarrior'
console.log(toCamelCase("The_stealth_warrior")); // 'theStealthWarrior'

/* 
1. () is used to capture 
2. match param - exact match, without g flag it will only find the first instance
3. captured param - exact match between ()
4. if there is a third param, it will return a number, that number is the index of where a match starts  
*/
