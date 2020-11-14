let getN = +prompt("Enter the first integer number");
const getM = +prompt("Enter the second integer number more than the first");
const skipPairs = confirm("skip even numbers?");
let sum = 0;

if (Number.isInteger(getN) && Number.isInteger(getN) && getN < getM) {
    if (skipPairs) {
       while (getN <= getM) {
        if(getN%2 === 1)  sum += getN;
        getN++;
       }
       console.log(sum);       
    } else {
        while (getN <= getM) {
        sum += getN;
        getN++;
        }
        console.log(sum);
    }
} else {
    console.log("Enter an integer");
