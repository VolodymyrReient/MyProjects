const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const male = ["Олександр", "Ігор", "Олексій"];
const female = ["Олена", "Іра", "Світлана"];
const studentsPairs = getPairs();
const topicsPairs = appointmentTopics();

function getPairs () {
    let studentsPairs = [];
    male.map((value, index) => {
        studentsPairs[index] = [value, female[index]];
    });
    return studentsPairs;
}
console.log(studentsPairs);

function appointmentTopics() {
    let topics = []; 
    studentsPairs.forEach((value, index) => {
        topics[index] = [[value, themes[index]].flat()];
    });
  return topics.flat();
}
console.log(topicsPairs);

function comparisonGrades() {
    let evaluation = []; 
    students.map((value, index) => {
        return evaluation[index] = [value, marks[index]];
    }); 
  return evaluation;
}
console.log(comparisonGrades());

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
getRandomIntInclusive(2, 5);
function groupAssessments() {
    let groupReting = [];
    topicsPairs.map((value, index) => {
        groupReting[index] = [[value, getRandomIntInclusive(2, 5)].flat()];
    });
    return groupReting.flat(    );
}
console.log(groupAssessments());