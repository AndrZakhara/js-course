///task 2
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head,
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};
let pockets = {
    money: 2000,
    __proto__: bed,
};
console.log(pockets.pen);
console.log(bed.glasses);
console.log(head.glasses);
console.log(table.money);

//task 3
let animal = {
    eat() {
        this.full = true;
        console.log(this);
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat();// rabbit full

//task 4
let hamster = {
    // stomach: [], // it use to be
    eat(food) {
        this.stomach.push(food);
    },
};
let speedy = {
    __proto__: hamster,
    stomach: [], // add
};
let lazy = {
    __proto__: hamster,
    stomach: [], // add
};

speedy.eat("apple");
speedy.eat("orange");
lazy.eat("peach");
console.log(speedy.stomach);
console.log(lazy.stomach);
