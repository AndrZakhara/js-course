function palindrome(str) {

  let count = 0;
  let arr = str.toLowerCase().split('').filter(char => /[a-z]/.test(char));
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == arr[arr.length - 1 - i]) {
      count++;
    }
  }

  if (count == arr.length) return true
  else return false;

};
let result = palindrome("eyE YE");
console.log(result);
