//my example 1
function* generateSequence() {
    yield "apple";
    yield 2;
    return 100;
}
let generator = generateSequence();
console.log(generator); // Object [Generator] {}

let one = generator.next();
console.log(JSON.stringify(one)); // {value: "apple", done: false}

let two = generator.next();
console.log(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next();
console.log(JSON.stringify(three)); // {value: 100, done: true}

let four = generator.next();
console.log(JSON.stringify(four)); // { done: true}

let five = generator.next();
console.log(JSON.stringify(five)); // { done: true} ...

//my example 2
function* generateSequence(input) {
    let a = 4 + input;
    yield a;
    yield 'ky-ky';
    yield true;
    return 300;   // not return 300
}
let generator = generateSequence(100);

for (let value of generator) {
    console.log(value); // 104 , ky-ky, true
}

//my example 3
function* generateSequence() {
    yield 1;
    yield 'second';
    yield 3;
}
let sequence = [47, false, ...generateSequence()];
console.log(sequence); // 47, false, 1, 'second', 3

//my example 4
function* gen() {
    let ask1 = yield "2 + 2 = ?";
    console.log(ask1); // yes

    let ask2 = yield "3 * 3 = ?"
    console.log(ask2); // 9
}
let generator = gen();

console.log(generator.next().value); // "2 + 2 = ?"
console.log(generator.next('yes').value); // "3 * 3 = ?"
console.log(generator.next(9).done); // true

//task 1
function* pseudoRandom(seed) {
    let val = seed;

    while (true) {
        val = val * 7 % 13;
        yield val;
    }
}
let generator = pseudoRandom(1);

console.log(generator.next().value); // 7
console.log(generator.next().value); // 10
console.log(generator.next().value); // 5
console.log(generator.next().value); // 9
console.log(generator.next().value); // 11
