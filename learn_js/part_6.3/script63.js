//my example 1
function sum(...arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7)); //28

//my example 2
function sayName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
};
sayName('dad', 'bob', 'jack', 'lara');

//my example 3
sayHi(); // error

let nam = "John";

sayHi(); // john

function sayHi() {
    console.log("Hi, " + nam);
}
sayHi(); // john
nam = "Pete";
sayHi(); // Pete

//my example 4
function makeCounter() {
    let count = 0;

    return function AA() {
        count++;
        return count;
    };
};
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

//my example 5
function foo() {
    console.log('this is foo');
};
function foo1() {
    return foo;
};

const foo2 = foo1;

console.log(foo2());
foo2()();

//my example 6
let a = 'global';
function outer() {
    let b = 'outer';
    function inner() {
        let c = 'inner'
        console.log(c);   // выдаст 'inner'
        console.log(b);   // выдаст 'outer'
        console.log(a);   // выдаст 'global'
    }
    inner();

    console.log(b);     // выдаст 'outer'
    console.log(a);     // выдаст 'global'
}
outer();

console.log(a);         // выдаст 'global'

//my example 7
function person() {
    let name = 'Peter';
    console.log("he is - ");

    return function displayName() {
        console.log(name);
    };
}
//   let peter = person();
//   peter(); // выведет 'Peter'
person()();

//my example 8
function DD() {
    let a = 0;
    return function dd() { return a++ };
};
let b = DD();

b();
console.log(b());//1
b();
console.log(b());//3

//task 4
let arr = [1, 2, 3, 4, 5, 6, 7, 3, 9];

function inBetween(a, b) {
    return ((item) => { return (item <= b && item >= a) });
};
// console.log(arr.filter((item) => { return (item <= 6 && item >= 3) }));
function inArray(arr) {
    return function (x) { return arr.includes(x) };
};

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([5, 2, 10]))); // 1,2

//task 6
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(value) {

    return (function (a, b) {
        return a[value] > b[value] ? 1 : -1;
    });
};

console.log(users.sort(byField('name')));

users.sort(byField('age'));
console.log(users);

//task 7
function makeArmy() {
    let shooters = [];

 
    for (let i = 0; i < 10;i++ ) {
         
        function shooter() { 
              
            console.log(i) };

        shooters.push(shooter);
        ;
         
    };
    
   return shooters;
};

console.log(makeArmy());

let army = makeArmy();

army[0]();
army[5]();
