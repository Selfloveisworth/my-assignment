//answer10
//Reverse a string

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));


//answer11
//Average of each students marks
const data = [
  {
    name: "student1",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: "student2",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: "student3",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

const result = data.map(student => {
  let marks = Object.values(student.marks);
  let avg = marks.reduce((a, b) => a + b, 0) / marks.length;
  return {
    [student.name]: { average: avg }
  };
});

console.log(result);
