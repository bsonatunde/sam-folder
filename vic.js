//Question
   //write a function to calculate a student GPA given the following data
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
    let unit = data[i].unit;
    let gradeUnit1 = gradeUnit(score);
    let gp = unit * gradeUnit1;
    totalUnit = totalUnit + unit;
    totalGU = totalGU + gp;
  }
  
  const gpa = totalGU / totalUnit;
  
  return `Your GPA is ${gpa}`;
  
  }
  
  console.log(gpa(data))
  
  
  