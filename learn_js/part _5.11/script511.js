// // task 1
// let ourdate = new Date(2012, 01, 20, 3, 12);
// alert(ourdate);

// //task 2
// let date = new Date(2012, 0, 3);  // 3 January 2012 
// let week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri","Sat"];

// function getWeekDay(str){

//     return week[str.getDay()];
// };
// alert( getWeekDay(date) );        // "Tue"

// //task 3
// let date = new Date(2021, 10, 14);

// function getLocalDay(days) {
//     let d = days.getDay()
//     if (d == 0) { d = 7 };
//     return (d);
// };
// alert(getLocalDay(date));       // 7

//task 4
function getDateAgo(today, days) {

    let now = today.getTime();
    let dif = days * 24 * 3600 * 1000;
    let dateAgo = new Date(now - dif)

    return dateAgo;
};
let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));// 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 36500)); // 2, (27 Jan 1915)
alert(date);
