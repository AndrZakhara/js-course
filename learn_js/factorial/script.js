///
function factorial(n) {
    return (n == 1) ? n : n * factorial(n - 1);
};

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {    // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

factorial = cachingDecorator(factorial);

console.log(factorial(5)); // factorial(1) кешируем
console.log("Again: " + factorial(4)); // возвращаем из кеша
