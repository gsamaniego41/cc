// Wow, I really messed this up! My implementation of these constructors and prototypes isn't working the way I want it to. Can you help me to debug my code, please? Thanks!

function Parent(attributes) {
  this.gender = attributes.gender;
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}

Parent.prototype.yabbaDabba = function() {
  return "Yabba dabba doo!";
};

Parent.prototype.speak = function() {
  // console.log(["Hello, my name is ", `${this.name}`]);
  return `Hello, my name is ${this.name}`;
};

const fred = new Parent({
  gender: "Male",
  age: 35,
  name: "Fred",
  homeTown: "Bedrock"
});

const wilma = new Parent({
  gender: "Female",
  age: 37,
  name: "Wilma",
  homeTown: "Bedrock"
});

console.log(fred);
console.log(fred.speak());
console.log(wilma);
console.log(wilma.speak());
console.log(wilma.yabbaDabba());

function Child(childAttributes) {
  Parent.call(this, childAttributes); // binding to Parent
  this.isChild = childAttributes.isChild; // a special attribute to Child
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.checkIfChild = function() {
  if (this.isChild) {
    console.log(Parent.prototype);
    return `My name is ${this.name} and I am a child object`;
  }
};

const pebbles = new Child({
  gender: "Female",
  age: 3,
  name: "Pebbles",
  homeTown: "Bedrock",
  isChild: true
});

console.log(pebbles);
console.log(pebbles.speak());
console.log(pebbles.checkIfChild());
console.log(pebbles.yabbaDabba());
