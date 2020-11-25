// 1
function getRandomArray(length, min, max) {
    return Array.apply(null, Array(length)).map(() => {
        return Math.round(Math.random()*(max - min) + min);
    });
}

// 2
function getMode(...arr) {
    let
        key, result = [],
        count = {}, 
        max = -Infinity,
        nomodeMsg = "The array hasn't mode.",
        nomodeFlag = true;
    arr.forEach((item) => {
        if ( !(item in count) && Number.isInteger(item)) count[item] = 0;
        count[item]++
        max = max < count[item] ? count[item] : max;
    } );
    if (max <= 1) return nomodeMsg;
    for (key in count) {
        if ( count[key] === max ) {
            result.push(key)
        } else {
            nomodeFlag = false
        }
    }
    return nomodeFlag ? nomodeMsg : +result;
}

// 3 
function filterEvenNumbers (...numbers) {
    const arr = [...numbers];
    let oddNum = [];
    arr.forEach((num) => {
        if (num % 2 === 1) {
            oddNum.push(num);
        }
    });
    return oddNum;
    }

// 4
function getAverage(...numbers) {
const onlyGoals = numbers.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => num);
let average = 0;
onlyGoals.forEach((num) => {
    if (Number.isInteger(num))
average += num;
});
return +average/onlyGoals.length.toFixed(2);
}

// 5 
function countPositiveNumbers(...numbers) {
let count = 0;
numbers.forEach( (num) => {
    if (num > 0) {
        count++;
    }
});
return count;
}

// 6
function getDividedByFive(...numbers) {
const withoutResidue = [];
numbers.forEach((num) => {
    if (num % 5 === 0){
        withoutResidue.push(num);
    }
})
return withoutResidue;
}

console.log(
    `
    Массив рандомних чисел(на вході 10, 3, 50): ${getRandomArray(10, 3, 50)},
    Мода(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ${getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)},
    Фільтр парних чисел(5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 105): ${filterEvenNumbers(5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 105)}
    Середнє арифметичне(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 3.5, 2.5, 40.5): ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 3.5, 2.5, 40.5)},
    Лічильник додатніх чисел(1, -2, 3, -4, -5, 6): ${countPositiveNumbers(1, -2, 3, -4, -5, 6)},
    Числа кратні 5(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
    `
);


