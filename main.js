var myName; 'Bolaji'
console.log(myName)

let info ='onatunde bolaji samuel ibadan poly Estate management';
  console.log(info);
  console.log(info);
  console.log(info);
  console.log(info);
  console.log(info);
  console.log(info);
//  End of my string
let a= 4;
let b=5;
console.log(a*b);

 // End of my number
 const  Iscool =true 
 console.log(Iscool)
 // End of boolean

 const name=('onatunde bolaji,')
 const age = 30 ;

 //concatenation joining of two valve using sign(+)
 console.log("my name is "+ name +" I am "+ age + "years old")

//method of string
const s =("hello word!");
console.log(s.toUpperCase());
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toLocaleUpperCase());
console.log(s.split(''));
 
 const k= ('christain, muslim, traditional');
console.log(k.split(','));

// array - variable that hold multiple values
const numbers = new Array (1,2,3,4,5);
console.log(numbers);

// array - variable that hold multiple values

const fruits=['mango', 'apple', 'penapple'];
 fruits[3] = "pears";
 //if i want mango to join the list (push)
 fruits.push('mangos');
 //if i want the orange to the fist (unshift)
 fruits.unshift('orange')
 // if i want to remove the last one on the list(pop)
 fruits.pop();
 //
 console.log(Array.isArray (fruits))
  console.log(fruits);

//another topic //

/**
 * Control flow
 * 
 */

// IF
// IF AND ELSE
// IF AND IF-ELSE
// SWITCH
// break
// continue
// try...catch
// throw

// 1 - IF condition .... &&, || ,!

let a = 'male';
let b = 'femaleaaaaaaa';
let c = 'both';
let message = 'empty for now';

// if (a === 'male') {
//   // console.log('I am a boy');
//   message = 'I am a boy';
// }

// if (b === 'female') {
//   // console.log('I am a girl');
//   message = 'I am a girl';
// }


// IF - ELSE
// if (condition) {} else {}
// IF condition is TRUE execute this
// ELSE - if the frst condition is not true then execute this
if (a === 'male') {
  // console.log('I am a boy');
  message = 'I am a boy';
} else {
  // console.log('I am a girl');
  message = 'I am a girl';
}


console.log(message);

// LOGICAL AND === &&
// 1 && 1 = true
// 1 && 0 = false
// 0 && 1 = false
// 0 && 0 = true

if ((a === 'male') && (b === 'female')) {
  // console.log('I am a boy');
  message = 'I am human AND human';
}

//if the two value are
// LOGICAL OR === ||
// 1 || 1 = true
// 1 || 0 = true
// 0 || 1 = true
// 0 || 0 = false

if ((a === 'male') || (b === 'female')) {
  // console.log('I am a boy');
  message = 'I am human OR Human';
}

// LOGICAL NOT === !
// !1 = false
// !0 = true
if (a != 'male') {
  // console.log('I am a boy');
  message = 'I am not true';
}
console.log(message);

if (b != 'female') {
  // console.log('I am a girl');
  message = 'I am not true';
}
console.log(message);




