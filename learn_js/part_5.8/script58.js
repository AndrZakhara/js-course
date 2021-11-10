// task 3 from part_5.7
let map = new Map();

map.set("name", "John")
    .set(234, "Rocky")
    .set(true, 34);

let box = Array.from(map.keys());
console.log(box);

box.push("help");
box.push(55);
console.log(box);

// task 1
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let userWS = new WeakSet();
let as = { text: 44 };
userWS.add(as);

for (let i = 0; i < messages.length; i++) {
     
    userWS.add(messages[i]);
};
console.log(userWS.has());
