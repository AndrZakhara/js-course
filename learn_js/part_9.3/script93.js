//task 1
class Rabbit extends Object {
    constructor(name) {
      super(name);  
      this.name = name;
    }
  }
  let rabbit = new Rabbit("Rab");
  
  console.log( rabbit.hasOwnProperty('name') );
