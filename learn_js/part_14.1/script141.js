//my example set/get
const obj = {
  people: "John",
  age: 30,
  job: 'teacher',
  get name() { return this.people },
  get old() { return "young" },
  set work(val) { this.job = val },
}
console.log(obj.age);
console.log(obj.people);
console.log(obj.name);
console.log(obj.old);

obj.work = 'cook';

console.log(obj);
console.log(obj.job);
console.log(obj.work);

//task 1
let user = {
  name: "John",
  job: true,
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) {
        return target[prop]
      } else throw new ReferenceError("it`s not property")
    }
  });
}
user = wrap(user);

console.log(user.name); // John
console.log(user.age); // it`s not property // stop code
console.log(user.job); // not reach

//task 2
let array = [10, 2, 30, 'forty', 50, 600];

array = new Proxy(array, {
  get(tar, prop, receiver) {

    let index = Number(prop);

    if (index < 0) {
      return tar[(tar.length + index)];// negative index
    } else return tar[prop];
  }
});

console.log(array[-1]); // 600
console.log(array[-3]); // forty
console.log(array[2]); // 30
