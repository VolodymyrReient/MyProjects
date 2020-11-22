const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const male = ["Олександр", "Ігор", "Олексій"];
const female = ["Олена", "Іра", "Світлана"];
const studentsPairs = getPairs();
const topicsPairs = appointmentTopics();

function getPairs () {
    const studentsPairs = [];
        for (let i =0; i < male.length; i++) {
            studentsPairs[i] = [male[i], female[i]].flat();
    }
    return studentsPairs;
}
console.log(studentsPairs);

function appointmentTopics() {
    const topics = []; 
        for (let i = 0; i < 3; i++) {
            topics[i] = studentsPairs[i].concat(themes[i]);
  }
  return topics;
}
console.log(topicsPairs);

function comparisonGrades() {
    const evaluation = []; 
        for (let i = 0; i < students.length; i++) {
            evaluation[i] = [students[i], marks[i]];
        }
  return evaluation;
}
console.log(comparisonGrades());

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function groupAssessments() {
    const groupReting = [];
    for (let i = 0; i < studentsPairs.length; i++) {
        groupReting[i] = [topicsPairs[i], getRandomIntInclusive(1, 5)].flat();
    }
    return groupReting;
}
console.log(groupAssessments());
