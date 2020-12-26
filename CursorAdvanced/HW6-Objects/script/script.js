const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

const getSubjects = (student) => 
Object.keys(student.subjects).map((el) => 
(el[0].toUpperCase() + el.slice(1)).replace("_", " ") );
console.log(getSubjects(students[0]));

function getAverageMark(student) {
  const ratingKeys = Object.entries(student.subjects);
  const rating = ratingKeys.map(el => {return el[1]});
  const sum = rating.flat().reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return +(sum/rating.flat().length).toFixed(2);
  }
getAverageMark(students[0]);
console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
  return {
    name: student.name,
    course: student.course,
    averageMark: getAverageMark(student)
  }
}
console.log(getStudentInfo(students[0]));

const getStudentsNames = (students) => {
  const arrayNames = students.map((obj) => {
    return obj.name;
  });
  return arrayNames.sort();
}
 console.log(getStudentsNames(students));


function getBestStudent(students) {
  const setMark = students.map((student) => [student.name, getAverageMark(student)]);
  let best = ['', 0];
  for (let i = 0; i < setMark.length; i++) {
    if (setMark[i][1] > best[1]) {
      best = setMark[i];
    }
  }
  return best[0];
}
console.log(getBestStudent(students));

function calculateWordLetters(word) {
  const wordArr = [...word]
  let result = {};
  wordArr.forEach((a) => {
    result[a] = result[a] + 1 || 1;
  });
  return result;
}
console.log(calculateWordLetters("тест"));
