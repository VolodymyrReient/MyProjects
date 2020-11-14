let numberStart;
do {
    numberStart = +prompt("Enter the first integer number", 0);
} while (!isFinite(numberStart));

let  numberEnd;
do {
     numberEnd = +prompt("Enter the second integer number more than the first", 0);
} while (!isFinite(numberEnd));
   
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
