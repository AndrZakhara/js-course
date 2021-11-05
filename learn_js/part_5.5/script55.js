//task 1
// function camelize(str) {

//     let arr = str.split('-');   // console.log(arr);

//     let arr1 = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

//     let arr2 = arr1.join('');
//     return arr2;
// };
// console.log(camelize("list-style-image"));
// console.log(camelize("background-color"));
// console.log(camelize("-webkit-transition"));

// // task 2
// function filterRange(arr, a, b) {
//     return arr.filter(item => +item >= a && +item < b);
// };
// let arr = [5, 3, 1, 9, 4, 6];

// console.log(filterRange(arr, 3, 6));
// console.log(arr);

// // task 3
// let arr = [2, 5, 11, 3, 8, 1, 4, 6];

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) { 
//             arr.splice(i, 1); i-- };
//     };
// };
// filterRangeInPlace(arr, 5, 7);
// console.log(arr);

// task 4
let arr = [0, 5, -2, 7, -1];
arr.sort(function (a, b) { return (b - a) });
console.log(arr);

// task 5
let arr = ["HTML", "JavaScript", "CSS", "PITON"];
function copySorted(arr) {
    return arr.concat().sort();
};
console.log(copySorted(arr));
console.log(arr);
