//task 1
function camelize(str) {

    let arr = str.split('-');   // console.log(arr);

    let arr1 = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

    let arr2 = arr1.join('');
    return arr2;
};
console.log(camelize("list-style-image"));
console.log(camelize("background-color"));
console.log(camelize("-webkit-transition"));

// task 2
function filterRange(arr, a, b) {
    return arr.filter(item => +item >= a && +item < b);
};
let arr = [5, 3, 1, 9, 4, 6];

console.log(filterRange(arr, 3, 6));
console.log(arr);

// task 3
let arr = [2, 5, 11, 3, 8, 1, 4, 6];

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) { 
            arr.splice(i, 1); i-- };
    };
};
filterRangeInPlace(arr, 5, 7);
console.log(arr);

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

// task 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

// let users = [
//     { name: "Вася", age: 25 },
//     { name: "Петя", age: 30 },
//     { name: "Маша", age: 28 },
// ];
let results = users.map(function(item) {return item.name});

console.log(results);

// task 8
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [vasya, petya, masha];

let usersMapped = users.map(function (item) {
    return ( { fullName: `${item.name} ${item.surname}` , id: item.id } )
});
// console.log(users);
console.log(usersMapped);
console.log( usersMapped[2].id ) // 3
console.log( usersMapped[0].fullName ) // Вася Пупкин

//task 9
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Peter", age: 30 };
let masha = { name: "Mary", age: 28 };
let john = { name: "John", age: 21 };

let arr = [ vasya, petya, masha, john ];

function compareNumeric(a, b) {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
  };

let sortByAge = arr.sort(compareNumeric );
    
console.log(sortByAge);
