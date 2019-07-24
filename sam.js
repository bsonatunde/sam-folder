
// IF AND IF-ELSE
// let a = 10
// let b = 15
// let c = 20
// let d = 20
// let e = 10
// let f = '10';

// if (a === 10) {
//   console.log(' A === 10');
// } else if (a === b) {
//   console.log('A IS B');
// }

let score = 25;
let grade;

if (score >= 70) {
  grade = 'A'
} else if (score < 70 && score >= 60) {
  grade = 'B'
} else if (score < 60 && score >= 50) {
  grade = 'C'
} else if (score < 50 && score >= 45) {
  grade = 'D'
} else if (score < 45 && score >= 40) {
  grade = 'E'
} else if (score < 40 && score >= 30) { 
  grade = 'F'
} else if (score < 30 && score >= 20) {
  grade = 'olodo'
  } else if (score < 20 && score >= 10) {
  grade = 'Try Again later'
} else {
  grade = 'advice to withdraw'
}

 


/*
// SWICTH Statement
let sex = 'olawle';
let message;

switch(sex) {
  case 'male':
    message = 'I am a badass guy';
    break;
  case 'female':
    message = 'I am a lady badass';
    break;
  default:
     message = 'I am neutral';  
}

console.log(message);
*/

console.log(grade);


