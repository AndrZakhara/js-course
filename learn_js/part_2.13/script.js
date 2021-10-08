// //task 4
// for (let num = 2; num <= 10; num++) {
//     if (num % 2 == 0) { alert(num) }
// };

// // task 5
// let i = 0;
// while (i < 3) { alert(`number ${i++}!`) }

// //task 6
// let inpNum;
// do {
//     inpNum = +prompt('input a number more 100', 0)
// }
// while (inpNum <= 100 && inpNum)
// alert(`your number is ${inpNum}, nice`);

//task 7 
let n = +prompt('input the number', 100)
//  INTEGERS
start: for (let a = 2; a <= n; a++) {
    for (let i = 2; i <= a; i++) {
        if (a % i == 0) 
        {   
            if (a == i) { alert(`numbers ${a}`) }
            else { continue start }
        }     
    } 
}

