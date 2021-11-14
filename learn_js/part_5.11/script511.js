// task 1
let ourdate = new Date(2012, 01, 20, 3, 12);
alert(ourdate);

//task 2
let date = new Date(2012, 0, 3);  // 3 January 2012 
let week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri","Sat"];

function getWeekDay(str){

    return week[str.getDay()];
};
alert( getWeekDay(date) );        // "Tue"

//task 3
let date = new Date(2021, 10, 14);

function getLocalDay(days) {
    let d = days.getDay()
    if (d == 0) { d = 7 };
    return (d);
};
alert(getLocalDay(date));       // 7

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

//task 5
function getLastDayOfMonth(year, month) {

    let dateYM = new Date(year, month + 1, 0);
    return dateYM;
};
alert(getLastDayOfMonth(2012, 1)); //= 29
alert(getLastDayOfMonth(2021, 10)); //= 29
alert(getLastDayOfMonth(2016, 1)); //= 29

//task 6
function getSecondsToday(year, month, day, hour, min, sek) {
    let date1 = new Date(year, month, day, 0, 0, 0, 0);
    let date2 = new Date(year, month, day, hour, min, sek);

    return (date2.getTime() - date1.getTime()) / 1000;
};
alert(getSecondsToday(2021, 10, 13, 10, 0, 0)); //== 36000 // (3600 * 10)
alert(getSecondsToday(2020, 0, 3, 20, 1, 0));

//task 7
function getSecondsToTomorrow() {
    let now = new Date();

    let dataTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
                        // console.log(now);
                        // console.log(dataTomorrow);
    return Math.round((dataTomorrow - now) / 1000);
};
console.log(getSecondsToTomorrow());
