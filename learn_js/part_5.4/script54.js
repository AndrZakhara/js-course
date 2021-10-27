//task 2
let styles = ["jaz", "blues"];
styles.push("rock", 'mix', 'opera', 'latino', 'valse', 'relax',);
let len = Math.floor(styles.length / 2);
styles[len] = ("classical");
console.log(styles.shift());
styles.unshift("reggi", "rep");
console.log(styles);
