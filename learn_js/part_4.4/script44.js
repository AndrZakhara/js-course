//task 4
// let calculator = {
//     read ( ) {
//        this.a = +prompt('input a ', 1);
//        this.b = +prompt('input b ', 1);
//        },
//     sum: function () {                //we can use "this.a" & "this.b" too
//         alert(`Summa ${calculator['a']}+${calculator['b']} equals... `);
//         return (calculator['a'] + calculator['b']);
//     },
//     mul: function () {
//         alert(`Multiplication ${calculator.a}*${calculator.b} equals... `);
//         return (calculator.a * calculator.b);
//     },
// };
// calculator.read();
// alert(calculator.mul());
// alert(calculator.sum());
// console.log(calculator);

//task 5
let ladder = {
    step: 0,
    up: function () { this.step++; return this },
    down() { this.step--; return this },
    showStep: function () { console.log(this.step); return this },
};

ladder.up().showStep().up().up().up().down().showStep(). up().up();

console.log(ladder);
