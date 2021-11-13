//task 1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(obj) {
    let sum = 0;
    let arr = Object.values(obj);
    for (let wage of arr) {
        sum += wage;
    };// console.log(arr);
    return sum;
};
console.log(sumSalaries(salaries)); // 650

//second method
function sumS(obj) {
    return (Object.values(obj).reduce( (a, b) => a + b, 0) )
};
let salariesss = {
    "John": 1150,
    "Pete": 1380,
    "Mary": 1250,
};
console.log(sumS(salariesss));//3780

// task 2
let user = {
    surname:'Bill',
    name: 'John',
    age: 30
  };
  function count(obj){
      return Object.keys(obj).length;
  };
  console.log( count(user) ); // 3
