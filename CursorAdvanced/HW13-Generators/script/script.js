const idGenerator = createIdGenerator();

function* createIdGenerator(start = 1, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

const fontGenerator = newFontGenerator(14);

function* newFontGenerator(initValue) {
    let value = initValue;
    while(true) {
        const char = yield value;
        if (char ==="up"){
          value += 2;
        }
        else if (char ==="down") {
            value -= 2;
        }
    }
}

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);