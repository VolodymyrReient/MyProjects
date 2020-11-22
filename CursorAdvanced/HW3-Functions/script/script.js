// 1 function
const getMaxDigit = (number) => +Math.max(...(number + ''));
console.log(getMaxDigit(123456));

//2 function
function getPow (x, y) {
    let res=1;
    for (let i=1; i<=y; i++) {
        res *= x;
    }
    return res;
}
console.log(getPow(5, 2));

//3 function
function formatName (name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(formatName("VOloDYmyR"));

//4 function
function calcTax (wage) {
    const tax = 19.5;
    const cleanWage = +wage - ((+wage/100)*tax);
    return cleanWage;
}
console.log(calcTax(1000));

//5 function
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(1,10));

//6 function
function uniqueLetters(str) {
    let string = str.toLowerCase().split('');
    let res = string.filter(function(val, i, str) {
    return str.lastIndexOf(val) === str.indexOf(val);
    });
    return res.join();
}
console.log(uniqueLetters("Бісквіт був дуже ніжним"));
