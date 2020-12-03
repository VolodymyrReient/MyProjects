// 1 function
const getMaxDigit = (number) => +Math.max(...(number + ''));
console.log(getMaxDigit(123456));

//2 function
function getPow (number, power) {
    let res=1;
    for (let i=1; i <= Math.abs(power); i++) {
        res *= number;
    }
    if (power < 0) {
        return 1 / res;
    } else {
        return res;
    }
    }
console.log(getPow(5, 2));

//3 function
const formatName = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
console.log(formatName("VOloDYmyR"));

//4 function
function calcTax (wage) {
    const tax = 19.5;
    const cleanWage = +wage - ((+wage/100)*tax);
    return cleanWage;
}
console.log(calcTax(1000));

//5 function
const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(getRandomIntInclusive(1,10));

//6 function
function uniqueLetters(str) {
    const string = str.toLowerCase().split('');
    const res = string.filter((val, i, str) => {
    return str.lastIndexOf(val) === str.indexOf(val);
    });
    return res.join();
}
console.log(uniqueLetters("Бісквіт був дуже ніжним"));