// //task 1
// let a = +prompt('input first number', '');
// let b = +prompt('input second number', '');
// alert(a + b);

// task 2
function readNumber() {
    let num;
    let va = +num;
    do {
        num = prompt('input number',);

    } while (typeof va !== 'number' || isNaN(num));

    if (num === "" || num === null) { alert('let`s again '); return -Infinity };
    return +num;
};
alert(" the number is " + readNumber());
