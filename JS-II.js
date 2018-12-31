/* 
You're going to write a function that invokes a callback.

The function which your function will invoke as a callback is already written: titleMfrYearString.

The function you will be completing is called whoMadeWhatWhen.

INPUT (three parameters):
an array: arr,
a string: mfrStr - for "manufacturer string," and
a callback function: cb.

Your algorithm will iterate through the array parameter (arr). It will search each object in the array for a "manufacturer" property. It will compare the manufacturer property on the object to the string parameter (mfrStr). If it finds a match, it will push the results of invoking the callback function into a placeholder array.

Before you return the results you've put in your placeholder array, you'll want to check for one "edge case". If there were no matches and the placeholder array is empty, return a string stating that there were no matches (see the example below for the sentence to return).

OUTPUT:
an array of formatted strings, or
if there are no matching results, then a formatted string

For example, there are two games by Williams in the arcadeGames array. If you searched for "Williams," (i.e. if you use the string "Williams" as the second argument when invoking whoMadeWhatWhen) then your console.log of the function would look like this:
console.log(whoMadeWhatWhen(arcadeGames, 'Williams', titleMfrYearString));
> [ 'Defender was made by Williams in 1981',
    'Sinistar was made by Williams in 1982' ]

There aren't any games by "EA" in the array of arcade game objects. If you searched for a manufacturer's name not in the arcadeGames array, your console.log of the function would look like this:
console.log(whoMadeWhatWhen(arcadeGames, 'EA', titleMfrYearString));
> We don't have anything by EA in our inventory

Lastly, note that the function we're invoking as a callback takes an array and an index. For example:
console.log(titleMfrYearString(arcadeGames, 1));
> Asteroids was made by Atari in 1979

Stretch Exercise: Formatting Strings with Template Literals
Try using Template literal formatting for the return string when no matching manufacturers are found in the array.

Look at the string titleMfrYearString returns. It returns a template literal* string. Template literals are enclosed in "back-ticks." Look to the top left of your keyboard - the back-tick should be right there with the "tilda" character:

back-tick: `
tilde: ~

A powerful feature of template literals allows us to format JavaScript code and variables directly in a string. To do this, we enclose the JavaScript in curly braces and pre-pended them with a dollar sign. For example:
const x = "Hello";
const y = "world"
console.log(`${x} ${y}!`) // <--- "Hello world!"

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
*/

// Don't modify this array of objects
let arcadeGames = [
  {
    id: 1,
    title: "Arkanoid",
    year: 1986,
    manufacturer: "Taito",
    genre: "breakout",
    max_players: 2,
    url: "https://en.wikipedia.org/wiki/Arkanoid"
  },
  {
    id: 2,
    title: "Asteroids",
    year: 1979,
    manufacturer: "Atari",
    genre: "multi-directional shooter",
    max_players: 2,
    url: "https://en.wikipedia.org/wiki/Asteroids_(video_game)"
  },
  {
    id: 3,
    title: "Defender",
    year: 1981,
    manufacturer: "Williams",
    genre: "scrolling shooter",
    max_players: 2,
    url: "https://en.wikipedia.org/wiki/Defender_(video_game)"
  },
  {
    id: 4,
    title: "Rush'n'Attack",
    year: 1985,
    manufacturer: "Konami",
    genre: "run and gun",
    max_players: 2,
    url: "https://en.wikipedia.org/wiki/Rush%27n_Attack"
  },
  {
    id: 5,
    title: "Sinistar",
    year: 1982,
    manufacturer: "Williams",
    genre: "scrolling shooter",
    max_players: 2,
    url: "https://en.wikipedia.org/wiki/Sinistar"
  },
  {
    id: 6,
    title: "Skate or Die!",
    year: 1988,
    manufacturer: "Electronic Arts",
    genre: "skateboarding",
    max_players: 1,
    url: "https://en.wikipedia.org/wiki/Skate_or_Die!"
  }
];

// Don't modify this function
function titleMfrYearString(arr, index) {
  return `${arr[index].title} was made by ${arr[index].manufacturer} in ${
    arr[index].year
  }`;
}

function whoMadeWhatWhen(arr, mfrStr, cb) {
  // Your code goes here
  let placeholder = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].manufacturer === mfrStr) {
      placeholder.push(cb(arr, i));
    }
  }

  return !placeholder.length
    ? `We don't have anything by ${mfrStr} in our inventory`
    : placeholder;
}

// else {
//   // if no matches & placeholder empty, return String (use `${}`)
//   return `We don't have anything by ${mfrStr} in our inventory.`;
// }

console.log(whoMadeWhatWhen(arcadeGames, "Williams", titleMfrYearString));
