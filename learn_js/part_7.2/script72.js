//// example 1
let user = {
  name: "John",
  age: 30,
  foo(x) { console.log(this.name) },
};
let des = Object.getOwnPropertyDescriptors(user);
console.log(JSON.stringify(des, null, 3));

//// example 2
let user = {
  name: "John",
  age: 30,
};
Object.defineProperty(user, "name", { writable: false });
user.name = "Pete";
console.log(user);// {name: 'John', age : 30}

//// example 3
let objCars = {
  car1: 'BMW',
  car2: 'Fiat',
  bike: 'velik'
};
Object.defineProperty(objCars, 'bike', { enumerable: false });
for (let key in objCars) {
  console.log(objCars[key]);
};
