// task 1
function tell() {
    console.log("since 1985 ...")
};
function say() {
    console.log("Hello!")
};

Function.prototype.defer1 = function (ms) {
    setTimeout(this, ms)
};

tell.defer1(2000);
say.defer1(1000);

//task 2
function f(...mas) {
    let sum = 0;
    for (let key of mas) {
        sum = sum + key;
    };
    console.log(sum);
};

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms)
    };
};
f.defer(1000)(6, 5, 4, 3, 2, 1); //  21 in 1 sec.
