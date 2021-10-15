//task 1
'use strict'
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';

console.log(user.name);

delete user.name;

//task 2
function isEmpty(obj) {

    let schedule = {};
    // schedule.morning = prompt('WHAT DO you do at 8.30 o`clock ? ', '')
    // schedule.afternoon = prompt('WHAT DO you do at 13.30 o`clock ? ', '')
    // schedule.evening = prompt('WHAT DO you do at 20.30 o`clock ? ', '')

    for (let key in schedule) {
        alert(key);
        return false;
    }
    alert('nothing');
    return true;
}
isEmpty();
console.log(isEmpty());

//task 3
let salaries = {
    John: 185,
    Ann: 160,
    Pete: 130
}
function SumSalary() {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
   return sum;
}
console.log(SumSalary());