document.addEventListener("DOMContentLoaded", () => {
let numberStart = +prompt("Enter the first integer number");
const  numberEnd = +prompt("Enter the second integer number more than the first");
const skipPairs = confirm("skip even numbers?");
let sum = 0;

if (Number.isInteger(numberStart) && Number.isInteger(numberEnd) && numberStart <numberEnd) {
    if (skipPairs) {
       while (numberStart <= numberEnd) {
        if(numberStart%2 === 1)  sum += numberStart;
        numberStart++;
       }
       console.log(`Сума: ${sum}`);       
    } else {
        while (numberStart <= numberEnd) {
        sum += numberStart;
        numberStart++;
        }
        console.log(`Сума: ${sum}`);
    }
} else {
    console.log("Enter an integer");
}
});