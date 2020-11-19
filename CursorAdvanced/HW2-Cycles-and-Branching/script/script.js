let numberStart;
do {
    numberStart = +prompt("Enter the first integer number", 0);
} while (!isFinite(numberStart) || !Number.isInteger(numberStart));
let  numberEnd;
do {
     numberEnd = +prompt("Enter the second integer number more than the first", 0);
} while (!isFinite(numberEnd) || !Number.isInteger(numberEnd));
   
const skipPairs = confirm("skip even numbers?");
let sum = 0;

if (numberStart < numberEnd) {
for (let i = numberStart; i <= numberEnd; i++) {
if (skipPairs && i%2 ===0) {
continue;
}
sum += i;
}
console.log(`Сума: ${sum}`);
} else {
     console.log("Enter a number more than the first");
}
