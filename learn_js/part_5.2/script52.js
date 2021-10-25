// //task 1
// let a = +prompt('input first number', '');
// let b = +prompt('input second number', '');
// alert(a + b);

// // task 2
// function readNumber() {
//     let num;
//     let va = +num;
//     do {
//         num = prompt('input number',);

//     } while (typeof va !== 'number' || isNaN(num));

//     if (num === "" || num === null) { alert('let`s again '); return -Infinity };
//     return +num;
// };
// alert(" the number is " + readNumber());

// // task 4
// let i = 0;
// while (i < 11) {
//     i += 0.2;
//     if (i > 9.6 && i < 10.4) console.log(i);
// }
// //task 5
// function rad(min, max) {
//     let j = 0;
//     while (j != 10) {
//         j++;
//         console.log((Math.random() * (max - min) + min).toFixed(2));
//         //    return;
//     };
// };
// rad(7, 20);

// task 6 (complicated by me!)
const obj = {};
obj["test"] = "until different*10";

function randomInteger(min, max) {
    // also we can doing here a check  "(max-min)>1"  using "if"  
    start: for (let step = 1; step < (max-min)*10; step++) {
        let b;
        let a = (Math.round(Math.random() * (max - min - 1) + min));

        for (let key in obj) {
            if (Number(obj[key]) != a) {
                b = a; //    console.log("шаг:" + step + " число: " + b + " перебор key " + key);
            }
            else { continue start };
        }
        obj[step] = b;

        if ((Object.keys(obj).length) == (1 + max - min)) { break };
    };
};
randomInteger(10, 20); // span number from ... to

console.log(obj);
console.log(Object.keys(obj).length);
