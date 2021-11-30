//task 1
function makeCounter() {
    let count = 0;

    function makeMeter() {
        return count++;
    };
//ф-ция это объект, можно добавлять свойства
    makeMeter.set = (value) => count = value;
    makeMeter.decrease = (value) => count = count - value -1;

    return makeMeter;
};

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

counter.set(15); // установить новое значение счётчика
console.log(counter()); // 15

counter.decrease(7); // уменьшить значение счётчика на 7
console.log(counter()); // 8 
