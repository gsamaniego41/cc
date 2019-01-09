/* 
Good morning! Today we will be emulating "logic gates" with JavaScript. Our functions will emulate the "not", "and", "not and", inclusive "or" and exclusive or "xor" operators.

For your emulation functions, you limited to only using the deep equality operator === and if (conditional) {statements}
Do not use !, &&, or ||.
Do not use the functions you have created to emulate any of the other logic gates, e.g. don't use your NOT() function in the NAND() function.

Your NOT() function only takes one parameter.
Your other functions will take two inputs and return a Boolean value which corresponds to the conditions satisfied by their logical operator.
To illustrate this behavior, refer to the truth tables below.
As an example, your AND() function should implement the following behavior: 

console.log(AND(true, true));   // ---> true
console.log(AND(true, false));  // ---> false
console.log(AND(false, true));  // ---> false
console.log(AND(false, false)); // ---> false


TRUTH TABLES
! = NOT
| phi | !phi |
|-----|------|
|  T  |   F  |
|  F  |   T  |

& = AND
| phi | psi | phi & psi |
|-----|-----|-----------|
|  T  |  T  |     T     |
|  T  |  F  |     F     |
|  F  |  T  |     F     |
|  F  |  F  |     F     |

NAND
| phi | psi | !(phi & psi) |
|-----|-----|--------------|
|  T  |  T  |       F      |
|  T  |  F  |       T      |
|  F  |  T  |       T      |
|  F  |  F  |       T      |

^ = inclusive OR
| phi | psi | phi ^ psi |
|-----|-----|-----------|
|  T  |  T  |     T     |
|  T  |  F  |     T     |
|  F  |  T  |     T     |
|  F  |  F  |     F     |

XOR = exclusive OR
| phi | psi | phi XOR psi |
|-----|-----|-------------|
|  T  |  T  |      F      |
|  T  |  F  |      T      |
|  F  |  T  |      T      |
|  F  |  F  |      F      |
*/

function NOT(b) {
  if (b === true) return false;
  else return true;
}

function AND(x, y) {
  if (x === false) return false;
  if (x === true) {
    if (y === true) return true;
    else return false;
  }
}

function NAND(x, y) {
  if (x === true) {
    if (y === true) {
      return false;
    } else return true;
  } else return true;
}

function OR(x, y) {
  if (x === false) {
    if (y === false) {
      return false;
    } else return true;
  } else return true;
}

function XOR(x, y) {
  if (x === true) {
    if (y === true) {
      return false;
    } else return true;
  }
  if (x === false) {
    if (y === false) {
      return false;
    } else return true;
  } else return true;
}

// console.log(NOT(!false))
// console.log(AND(true, true));   // ---> true
// console.log(AND(true, false));  // ---> false
// console.log(AND(false, true));  // ---> false
// console.log(AND(false, false)); // ---> false

// console.log(NAND(true, true)); // ---> false
// console.log(NAND(true, false)); // ---> true
// console.log(NAND(false, true)); // ---> true
// console.log(NAND(false, false)); // ---> true

// console.log(OR(true, true)); // ---> true
// console.log(OR(true, false)); // ---> true
// console.log(OR(false, true)); // ---> true
// console.log(OR(false, false)); // ---> false

console.log(XOR(true, true)); // ---> false
console.log(XOR(true, false)); // ---> true
console.log(XOR(false, true)); // ---> true
console.log(XOR(false, false)); // ---> false
