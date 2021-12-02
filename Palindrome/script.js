function palindrome(str) {

  let count = 0;
  let arr = str.toLowerCase().split('').filter(char => /[0-9a-z]/.test(char));
  // console.log(arr);
  let halfLength = Math.floor(arr.length / 2);

  for (let i = 0; i < halfLength; i++) {

    if (arr[i] == arr[arr.length - 1 - i]) {
      count++;
    }
  }

  if (count == halfLength) {
    return true;
  }
  else {
    return false;
  }

};
let result = palindrome("_+ aSa saS 5  ");
console.log(result);
