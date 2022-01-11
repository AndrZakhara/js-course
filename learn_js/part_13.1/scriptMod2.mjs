//my task 
import multi from "./scriptMod1.mjs"
import {
  name1,
  name2 as friend,
  goRight
} from "./scriptMod1.mjs";
import {city} from './scriptMod0.mjs'

let ml = multi(3, 5);

console.log("result " + ml);
console.log(`${friend}  after  ${name1}`);
goRight();
console.log(name1 + ' is going to ' + city);
