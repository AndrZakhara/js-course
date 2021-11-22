//task 1a
function sumTo(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    };
    return sum;
};
console.log(sumTo(100)); // 5050

//task 1b
function sumTo(n) {
    if (n > 0)
        return (n == 1) ? 1 : n + sumTo(n - 1);
};
console.log(sumTo(5)); // 15

//task 1c
function sumTo(n) {
    if (n > 0) return (n / 2 * (n + 1))
};

console.log(sumTo(6)); // 21

//task 2 (factorial)
function factorial(n) {
    return (n == 1) ? n : n * factorial(n - 1);
};
console.log(factorial(6)); // 720

// task 3 (numbers of Fibonacci)
function fib(n) {
    let sum = 0,
        lasts = 1;

    for (i = 1; i <= n; i++) {

        let nextsum = sum + lasts;
        lasts = sum;
        sum = nextsum;
    };
    return sum;
};
console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

// second variant 
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(44)); // вычисляется очень долго 8 - 9 sec

// task 4
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(obj) {
    let preObj = obj;

    while (preObj) {

        console.log(preObj.value);
        preObj = preObj.next;
    };
    //      recursion
    // console.log(obj.value); //1,2,3,4
    // if (obj.next) { printList(obj.next) };
};
printList(list);

//task 5 recursion back
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(obj) {

    let preObj = obj;
    const arr = new Array;
    while (preObj) {

        arr.unshift(preObj.value);
        preObj = preObj.next;
    };
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };

    // if (obj.next) {

    //     printList(obj.next);
    // };
    // console.log(obj.value); //4,3,2,1
};
printList(list);

