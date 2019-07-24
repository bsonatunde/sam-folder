// refrence types...//
// Object ... Array...function..//

// // // OBJECT
// //    let name = 'oantunde bolaji'
// //    let age= 30

// //    let person= {
// //        name : 'onatunde bolaji',
// //        age : 20

//    };
// console.log(person);

   // alert('hello world:');
    
   //loops
   
   let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   let sum = 0
   for (let i = 0; i <= arr.length; i++ ) {
      if(i % 5==0) {
       sum += i;
      }
    }
    console.log(sum);

    // WHILE -- while(condition) {}
let count = 0;
sum = 0;
while(count < arr.length) {
   if (arr[count] % 5 ==0) {
       sum += arr[count];
   }
  count++;
}
console.log(sum);

    // Question
   // write a function to calculate a student GPA given the following data
const data = [{
  course: 'MAT101',
  score: 75,
  unit: 4
},
{
  course: 'MAT103',
  score: 52,
  unit: 3
},
{
  course: 'MAT105',
  score: 20,
  unit: 4
},
{
  course: 'MAT107',
  score: 95,
  unit: 3
},
{
  course: 'MAT109',
  score: 65,
  unit: 3
}
];

//solution 
// if (score >= 70) {
//     grade = 'A'
// } else if (score < 70 && score >= 60) {
//     grade = 'B'
// } else if (score < 60 && score >= 50) {
//     grade = 'C'
// } else if (score < 50 && score >= 45) {
//     grade = 'D'
// } else if (score < 45 && score >= 40) {
//     grade = 'E'
// } else {
//     grade = 'F'
// }
// console.log(grade)
function gradeUnit(score) {
if (score >= 70) {
  return 5;
} else if (score < 70 && score >= 60) {
  return 4;
} else if (score < 60 && score >= 50) {
  return 3;
} else if (score < 50 && score >= 45) {
  return 2;
} else if (score < 45 && score >= 40) {
  return 1;
} else {
  return 0;
}
}


function gpa(data) {
let totalUnit = 0;
let totalGU = 0;
for (let i = 0; i < data.length; i++) {
  let score = data[i].score;
  let unit = data[i].score;
  let gradeUnit1 = gradeUnit(score);
  let gp = unit * gradeUnit1;
  totalUnit = totalUnit + unit;
  totalGU = totalGU + gp;
}

const gpa = totalGU / totalUnit;

return `Your GPA is ${gpa}`;

}

console.log(gpa(data))





// Another one
console.log('WELCOME BACK!!!');

// 1. Write javascript program to calculate the sum of multiple of five between 1 and 20;
// Do this using FOR LOOP, WHILE and DO WHILE Loop;

sum = 0;
let n = 100;
for (let i = 0; i <= n; i++) {
  if (i % 5 === 0) {
    sum += i;
  }
}
// console.log(sum);

// Factorial N! === n*(n-1)*(n-2)*(n-3)*...()
// 5! === n * n-1 * n-2 * ... * 1

n = 3;
fac = 1;
for (let i = n; i >= 1; i--) {
  fac *= i;
}
// console.log(fac);

// fac = 1 * 3
// fac = 3 * 2
// fac = 6 * 1
// fac = 6

// print out all even numbers between 1 and n where n is a positive integer

n = 10;
let arrEven = [];
for (let i = 1; i <= 10; i++) {
  if ( i % 2 === 0) {
    arrEven.push(i);
  }
}
// console.log(arrEven);


// FUNCTION
// if f(x) = x**2 * x; find f(2)?

// function name() {
//   ...

// }

// if f(x) = x**2 * x; find f(2)?
// f(2) = 8;

// function f(x) {
//   const y = (x**2) * x;
//   console.log(y); 
// }

// function f1(x) {
//   const y = (x**2) * x;
//   return y;
// }

// const result = f1(2);
// console.log(result);

// sum up all even numbers between x and y where x < y and x,y +ve integers x and y inclusive;
function add(x, y) {
  let addUp = 0;
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      addUp += i;
    }
  }
  return addUp;
}

let result = add(10, 15);
console.log(result);
