//task 1
let user = {
    name: "Bill Davidson",
    age: 35,
    job: true
};
let str = JSON.stringify(user);
//console.log(str);
console.log(JSON.parse(str));

//task 2
let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    // (`${key}: ${value}`);
    return (value == meetup && key != '') ? undefined : value;

}));
