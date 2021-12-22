//task 1
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
    // this.message = "KY-KY error formation";
    this.stack = "stack"
  }
};
let err = new FormatError("KY-KY error formation");

console.log(err.message); // KY-KY error formation
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true 
