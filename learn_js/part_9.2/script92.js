//// example 1
class Rectangle {
  constructor(a, b) {
    this.hight = a;
    this.width = b;
    this.sum();
  }
  sum() {
    console.log(this);
    return (this.hight + this.width);
  }
  doubleSquare() { return this.hight * this.width * m }
};
let m = 2;
const rect = new Rectangle(10, 10);

console.log(rect.doubleSquare());
console.log(rect.sum());

// task 1
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name);
    // this.name = name;    //dont right
    this.created = Date.now();
  }
}
let rabbit = new Rabbit(" white Rodger ");

console.log(rabbit.name + rabbit.created);

// task 2
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(op) {
    super(op);
    let { precision = 1000 } = op;
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 500,
});
lowResolutionClock.start();
