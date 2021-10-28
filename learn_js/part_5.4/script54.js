// //task 2
// let styles = ["jaz", "blues"];
// styles.push("rock", 'mix', 'opera', 'latino', 'valse', 'relax',);
// let len = Math.floor(styles.length / 2);
// styles[len] = ("classical");
// console.log(styles.shift());
// styles.unshift("reggi", "rep");
// console.log(styles);

// task 3
function sumInput() {
    let arrSum = [];
    for (let i = 0; ; i++) {
        let a = prompt('input number',);
        if (!isNaN(a) && a !== null && a !== '') arrSum[i] = a;
        else break;
    };
    let sum = 0;
    for (let key of arrSum) { sum = sum + +key; };
    console.log(arrSum);
    return sum;
};
alert(sumInput());


