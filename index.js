

  //aritimetic operation Js

 // DATE: 26/06/2018
  //BASIC MANIPULATION
 
// DataType === Number

let a = 10;
let b = 20;
let c = 2

// addition
let sum = a + b
console.log(sum);


// subtraction
let sub = b - a
console.log(sub)

// multiplication
let mul = a * b
console.log(mul)

// division
let div = a / b
console.log(div);

// modulus
let d = 5
let e = 14
let modulus = e % d
console.log(modulus, " => modulus");

// exponent
let exp = 2**10
console.log(exp)

// a + b  / c  * a - c / b
let multipleManipulation = ((((a + b) / c) * a) - c) / b;
console.log(multipleManipulation);

/**
 * STEP 1 => a + b = 30
 * STEP 2 => STEP 1 / c = 15
 * STEP 3 => STEP 2 * a = 150
 * STEP 4 => STEP 3 - c = 148
 * STEP 5 => STEP 4 / b = 7.4
 * step 5 is the result =>  7.4
 * 
 * ===> BODMAS
 */


// detect if 50 is an even number
let check = false
if (51 % 2 === 0) {
  check = true
}
console.log(check);


// add 1 to a
a = a + 1
console.log(a, '== new value of a');

a += 10000000 // a = a + 10000000;
console.log(a, '== new value of a');

a -= 1 // a = a - 1;
console.log(a, '== new value of a');

a *= 2// a = a * 2;
console.log(a, '== a *= 2new value of a');

a /= 2 // a = a / 2;
console.log(a, '== new value of a');

a++ // a = a + 1;
console.log(a, '== new value of a');

a-- // a = a - 1
console.log(a, '== new value of a');




// COMPARISON OPERATOR
// ==  compare only value
// === compare value and data type 
// > greater than
// < less than
// >== greater than or equal to
// <== less than or equal

let value1 = 1;
let value2 = '1';

console.log(value1 == value2) // true // compare only value
console.log(value1 === value2) // false // compare both value and type

console.log(5 > 6); // false
console.log(6 > 5); // true
console.log(6 > 6); // false

console.log(6 >= 6); // true