//task 1
let browser = prompt('input name your browser', '');

if (browser === 'Edge') { alert("You've got the Edge!") }

else if (browser === 'C' || browser === 'F' || browser === 'S' || browser === 'O')
     { alert('Okay we support these browsers too') }

else { alert('We hope that this page looks ok!') };

//task 2
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break
    default:
        alert('надо было ввести от 0 до 3!');
        break;
}
