//task 1
let user = { names: "John", years: 30, hobby: "ski", };

let { names, years: age = undefined, isAdmin = false } = user;

console.log(names); // John
console.log(age); // 30
console.log(isAdmin); // false

//task 2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Katy": 150,
};
function topSalary(obj) {
  let maxcash = 0;
  let name = " ?! unknown ";
  for (let [key, cash] of Object.entries(obj)) {
    if (maxcash < cash){
       maxcash = cash ;
       name = key;
    };
  };
  return name;
};
console.log(topSalary(salaries));//Pete
