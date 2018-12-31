/*  
You have an array full of objects detailing information about pets: name, species and age. Let's write a function which iterates through each object, looks for all the pets of a particular species, converts each of those pets' ages into human years, then reduces the converted pets' ages into one sum.

INPUT three parameters
an array: arr,
a string: kind,
a number: multiply

Write a function that uses the JavaScript Array methods: .filter(), .map() and .reduce().

OUTPUT:
console.log(sumPetYears(pets, 'dog', 7));
// The combined dogs' ages: 154
console.log(sumPetYears(pets, 'cat', 4));
// The combined cats' ages: 132
console.log(sumPetYears(pets, 'parakeet', 5));
// The combined parakeets' ages: 65

Do not modify the original "pets" array. Write your function so that the "pets" array is not mutated as a result of invoking your function. To verify the input array is not mutated, you can console.log it after your function:
console.log(pets); // ---> remains the same? Yes! 
 */

const pets = [
  {
    name: "Tinkerbell",
    species: "cat",
    age: 2
  },
  {
    name: "Lucy",
    species: "dog",
    age: 12
  },
  {
    name: "Chloe",
    species: "cat",
    age: 18
  },
  {
    name: "Mojo",
    species: "dog",
    age: 6
  },
  {
    name: "Olivia",
    species: "parakeet",
    age: 4
  },
  {
    name: "Shadow",
    species: "cat",
    age: 8
  },
  {
    name: "Oreo",
    species: "cat",
    age: 5
  },
  {
    name: "Molly",
    species: "dog",
    age: 4
  },
  {
    name: "Freddie Prinze Jr.",
    species: "parakeet",
    age: 9
  }
];

function sumPetYears(arr, kind, multiply) {
  // Your code goes here
  let sumYears = arr
    .filter(pet => pet.species === kind)
    .map(pet => pet.age * multiply)
    .reduce((a, b) => a + b);
  return `The combined ${kind}s' ages: ${sumYears}`;
}

console.log(sumPetYears(pets, "cat", 4));
console.log(sumPetYears(pets, "dog", 7));
console.log(sumPetYears(pets, "parakeet", 5));
