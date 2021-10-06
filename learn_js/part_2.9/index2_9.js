//task 1
let JSname;
JSname = prompt('Какое «официальное» название JavaScript?', '');

if (JSname == 'ECMAScript') { alert('ВЕРНО') }
else { alert('Не знаете? ECMAScript!') }

//task 2
let yourNumber = prompt('write the number', '')

if (yourNumber > 0) { alert('1') }
else if (yourNumber < 0) { alert('-1') }
else { alert('0') }

//task 3
let a = prompt('input number ', 'a');
let b = prompt('input number ', 'b');

let result = (+b + +a < 8) ? 'little' : 'a lot';

alert(`yes, that is so ${result}`);

//task 4

let message;
let login = prompt('input position', 'Why are you?');

login == 'Employee' ? message = 'Hi'
    : login == 'Director' ? message = 'Hello'
        : login == '' ? message = 'Not login'
            : 'nonsense';
alert(message);
