function palindrome(str) {

    let arr = str.split('');
    console.log(arr);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == arr[arr.length - 1 - i]) {
           
            count++;
        }
    }
    if (count == arr.length) { return true } else { return false }
};

let result = palindrome("eye");
console.log(result);
