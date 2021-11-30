//my task

let d = setInterval(() => console.log("da"), 1000);

setTimeout(() => {
    clearInterval(d);
    console.log("stop")
}, 5000);

//my task recursion

let timeDel = setTimeout(function aa() {

    console.log("tick");
    timeDel = setTimeout(aa, 1000);

}, 4000);// delay before first call

//task 1
function printNumbers(from = 5000, to = 10000) {
    if (from < to) {

        setTimeout(() => {

            let goInt = setInterval(() => { console.log("ky-ky  " + new Date) }, 1000);

            setTimeout(() => clearInterval(goInt), to - from);

        }, from);

    }
};
printNumbers(2000, 6000);

//task 1.2
function printNumbers(from = 1, to = 10) {

    let start = from;

    setTimeout(function delStart() {
        if (start < to) {
            setTimeout(delStart, 1000);
            console.log(start);
            start++;
        }
    }, from * 2000);

};
printNumbers(2, 7);

//task 2
let i = 5;

setTimeout(() => console.log(i), 100); // 10000000005 around 3 sec.

for (let j = 0; j < 1000000000; j++) {
    i++;
};
