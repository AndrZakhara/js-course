// //task 2
// let styles = ["jaz", "blues"];
// styles.push("rock", 'mix', 'opera', 'latino', 'valse', 'relax',);
// let len = Math.floor(styles.length / 2);
// styles[len] = ("classical");
// console.log(styles.shift());
// styles.unshift("reggi", "rep");
// console.log(styles);

// // task 3
// function sumInput() {
//     let arrSum = [];
//     for (let i = 0; ; i++) {
//         let a = prompt('input number',);
//         if (!isNaN(a) && a !== null && a !== '') arrSum[i] = a;
//         else break;
//     };
//     let sum = 0;
//     for (let key of arrSum)   { sum = sum + +key;
//      };
//     console.log(arrSum);
//     return sum;
// };
// alert(sumInput());

//task 5
let arr = [2, -1, 8, 3, -9, 6, -5, 2,]
function getMaxSubSum() {

    let sum = 0,
        maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) sum = 0;
        // else arr.shift();
    };
    return maxSum;
};
console.log(getMaxSubSum());
