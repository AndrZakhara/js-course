let username = "Иван";

// Вставим переменную
console.log( `Привет, ${username}!` ); // Привет, Иван!

// Вставим выражение
console.log( `результат: ${1 + 2}` ); // результат: 3

console.log(typeof undefined) // "undefined"

console.log(typeof 0 )// "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)

console.log(typeof null) // "object"  (2)

console.log(typeof alert) // "function"  (3)