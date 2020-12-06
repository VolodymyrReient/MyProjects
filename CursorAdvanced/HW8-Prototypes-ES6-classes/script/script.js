class Student {
    constructor(university, course, fullName) {
        this.marks = [5, 4, 4, 5];
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    getInfo () {
        return `Студент ${this.course}го курсу ${this.university} м.Львів, ${this.fullName}`;
    }
    get getMarks() {
        return this.marks;
    }
    set setMarks(mark) {
        this.marks.push(mark);
    }
    getAverageMark() {
        let average = 0;
        this.marks.forEach((item) => {
            average += item;
        });
        return +(average / this.marks.length).toFixed(2);
    }
    dismiss() {
        return this.marks = [null];
    }
    recover() {
        return this.marks = [5, 4, 4, 5];
    }
}
const volodymyr = new Student("НУ ЛП", "4", "Реєнт Володимир Олегович");

console.log(volodymyr.getInfo());
console.log("Массив оцінок", volodymyr.getMarks);
volodymyr.setMarks = 5;
console.log("Поставили оцінку",volodymyr.getMarks);
console.log("Середній бал",volodymyr.getAverageMark());
console.log("Студента виключено",volodymyr.dismiss());
volodymyr.setMarks = 5;
console.log("Студента поновлено",volodymyr.recover())


