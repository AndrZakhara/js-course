//task 2
function checkAge1(age) {
    return age > 18 ? true : confirm('Have parents allowed? ');
}
checkAge1(11);

function checkAge(age) {
    return age > 18 || confirm('Have parents allowed to watch yet? ');
}
checkAge(13);

//task 3
function checkMin(a, b) {
    if (a <= b) { return a } else { return b }
}
let min = checkMin(-4, 2);
alert(min);

//task 4
function pow(x, n) {
    return " well ! " + x ** n;
}
let x = prompt('input x',),
    n = prompt('input n',),
    result = pow(x, n);

n < 1 ? alert('can not to show') : alert(result);
