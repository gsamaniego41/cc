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

console.log("***** Parents *****");
console.log("1.", fred);
console.log("2.", fred.speak());
console.log("3.", wilma);
console.log("4.", wilma.speak());

function Child(childAttributes) {
  Parent.call(this, childAttributes); // binding to Parent
  this.isChild = true; // a special attribute to Child
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.checkIfChild = function() {
  if (this.isChild) {
    console.log(this);
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

console.log("***** Child *****");
console.log("5.", pebbles);
console.log("6.", pebbles.speak());
console.log("7.", pebbles.checkIfChild());
console.log("8.", pebbles.yabbaDabba());
