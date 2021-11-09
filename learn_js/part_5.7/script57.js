// //task 1
// function unique(arr) {
//     let aaa = new Set(arr);
//     return Array.from(aaa);
// };
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values)); // Hare,Krishna,:-O

//task 2
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(array) {
    let arrSort = new Map();

    for (let str of array) {

        let word = str.toLowerCase().split('').sort().join('');

        arrSort.set(word,str);//the sorting become keys & meaning - str, 
    };
    return Array.from(arrSort.values());
};
console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
