//example
let user = {
  firstName: "Вася",
};
function sayHi(x, y, z) {
  console.log(`Привет, ${this.firstName}!` + x + y);
};
let aa = sayHi.bind(user, ' da ');
let bb = aa;

aa(' rr', ' it`s me');
setTimeout(aa, 2000);
bb(' ff');

//task 1
let user = {
  go: foo.bind(null)// жестко связан вызов с null
};                // перенаправить нельзя уже

function foo() {
  console.log(this); // global
};

user.go();

//task 2
const obj = {
  name: "Вася",
  age: 40,
  test: 1,
};
function sayHi() {
  console.log(this.name);
};
sayHi.test = 5;

let bound = sayHi.bind(obj);

console.log(bound.test); // undefined
console.log(bound); //[Function: bound sayHi]
console.log(bound());//Вася ; undefined
console.log(sayHi.test); // 5

//task 3
function foo() {
  console.log(this.name);
}
sayName = foo.bind({ name: "Вася" }).bind({ name: "Петя" });
sayName();  //vasy
sayName = foo.bind({ name: 'john' });
sayName();  //john

//task 4
function askPassword(ok, fail) {
  let password = 'i don`t know';   //prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: 'Вася',
  loginOk() { console.log(`${this.name} logged in`) },
  loginFail() { console.log(`${this.name} failed to log in`) },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//task 5
function askPassword(ok, fail) {
  let password = 'rockstar';      //("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'));
  }
};
askPassword(user.login.bind(user, true), user.login.bind(user, false)); //first variant
askPassword(() => user.login(true), () => user.login(false));// second variant
