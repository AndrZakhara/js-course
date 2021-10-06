//task 6
let age = prompt('input number',);

if (age >= 14 && age <= 90) { alert('you are right!') }
else { alert('wrong') };

//task 7
if (age < 14 || age > 90) { alert('not right!') };

//task 7.1

if (!(age < 14 || age > 90)) { alert('great! it is a nice') }
else { alert(`it's bad ${age}`) };

// task 8
let login = prompt('! input the login !',);
let pass;
if (login == 'admin')
 {
    pass = prompt('input password', '1234567890')
    if (pass == 1) { alert('hello BOSS!') }
     else if (pass == '' || pass == null) { alert('cancel') }
      else { alert('password is not right') }
 }
else if (login == '' || login == null) { alert('cancel') }
else { alert('i dont know you') };
