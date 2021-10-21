// // clone --- my test
// let data = {
//     name: 'Dodo',
//     age: 45,
//     born: 'Mexico',
//     go: function () { console.log('ky-ky') },
// };
// let obj = {};
// for (let g in data) { obj[g] = data[g] };
// console.log(obj);
// console.log(data.go());

// let house = {
//     square: 100,
//     age: 30,
// }
// let oldest = Object.assign({}, data, house);
// console.log(oldest);

// // function construction --- my test
// function User(name, age, nat) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log("my name is " + this.name + " & I`am " + this.age)
//     };
//     this.nat = nat;
// }
// let vasya = new User("Vasya", 30, "ua", 55, "ky-ky");
// let peter = new User("Peter", '', "usa");

// vasya.sayHi();
// console.log(vasya);
// console.log(peter);
// peter.sayHi();

// // task 2
// function Calculator() {

//     this.read = function () {
//         this.a = +prompt('input a ', 1);
//         this.b = +prompt('input b ', 1);
//     };
//     this.sum = function () {
//         alert(`Summa ${this.a}+${this.b} equals... `);
//         return (this.a + this.b);
//     };
//     this.mul = function () {
//         alert(`Multiplication ${this.a}*${this.b} equals... `);
//         return (this.a * this.b);
//     };
// };
// let calculator11 = new Calculator();

// calculator11.read();

// alert("Sum=" + calculator11.sum());
// alert("Mul=" + calculator11.mul());

//task 3

function Accumulator(startValue) {
    this.value = startValue;

    this.read = function () {
        this.value += +prompt('input value ', 0);
        // return this;
    };
};
let accumulator = new Accumulator(5);

accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);
