//example:  func.call()
function say(phrase) {
    console.log(this.name + ': ' + phrase + this.age);
}
let user = {
    surname: "Smith",
    name: "John",
    age: 30,
    job: true,
};
say.call(user, " Hello  ", "gyd buy"); // John: Hello 30

//example: func.decoration
function add(a, b) {
    return a + b;
}
function logsDecor(f) {
    return function (...args) {
        const result = f(...args);
        console.log(args, result);

        return result;
    };
};
const addAndLog = logsDecor(add);//   add = logsDecor(add);
addAndLog(9, 4, 5, 1);

///task 1
function work(a, b) {
    console.log(a + b);
};
function spyDecoration(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);

        return func.apply(this, arguments);
    };
    wrapper.calls = [];

    return wrapper;
};
work = spyDecoration(work);
work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
};

//task 2
function f(x) {
    console.log("ky-ky " + x);
};

function delayDecoration(f, ms) {

    return function () {
        setTimeout(() => { f.apply(this, arguments) }, ms)
    };
};
let first = delayDecoration(f, 1000);
let second = delayDecoration(f, 3500);

first("test"); // показывает "test" после 1000 мс
second("test"); // показывает "test" после 3500 мс

