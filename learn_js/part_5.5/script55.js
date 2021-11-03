//task 1
function camelize(str) {

    let arr = str.split('-');   // console.log(arr);

    let arr1 = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

    let arr2 = arr1.join('');
   // return arr2;
};
console.log(camelize("list-style-image"));
console.log(camelize("background-color"));
console.log(camelize("-webkit-transition"));

