function factorial(n) {
    return (n == 1) ? n : n * factorial(n - 1);
};

function cachingDecorator(foo1) {
    let cache = new Map();

    return function (x) {
        let multi = 1;
        for (let i = x; i > 1; i--) {

            if (cache.has(i)) {
                let result = cache.get(i) * multi;
                cache.set(x, result);
                return result
            } else {
                multi = multi * i;
                console.log(" multi " + multi);
            }
        }
        let result = foo1(x); 
        cache.set(x, result); 
        return result;
    };
}
factorial = cachingDecorator(factorial);

console.log(`First call 4!: ` + factorial(4)); // factorial(1) кешируем
console.log(`Second call 7!: ` + factorial(7)); // возвращаем из кеша
console.log(`thread call 6!: ` + factorial(5)); // возвращаем из кеша
