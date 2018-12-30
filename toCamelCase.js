/* 
Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"
toCamelCase("The_stealth_warrior")
// returns "TheStealthWarrior" 
*/

const toCamelCase = str => {
  return str.replace(/[-_]([a-z])/gi, (str, char) => char.toUpperCase());
};

console.log(toCamelCase("the-stealth-warrior")); // 'theStealthWarrior'
console.log(toCamelCase("The_stealth_warrior")); // 'theStealthWarrior'
