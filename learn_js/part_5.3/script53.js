//task 1
function ucFirst(word) {
    if (word) {
        word = word[0].toUpperCase() + word.slice(1);
        console.log(word)
    }
    else return;
};
ucFirst("gogi");
ucFirst("");
ucFirst("pupsik");

//task 2
function checkSpam(str) {
    let nests = str.toLowerCase();
    console.log(nests);
    if (nests.indexOf('viagra') != -1 || nests.indexOf('xxx') != -1) {
        return true
    }
    else { return false }
};
console.log(checkSpam('buy VIagra now'));
console.log(checkSpam('free XXXxx and GO'));
console.log(checkSpam("innocent  rabbit"));

//task 3
function truncate(str, maxlength) {

    let a = str.substr(0, maxlength);
    if (str.length > maxlength)
        return (a = a + '…')
    else return a;
};
console.log(truncate("this is word ,word word ", 15));
console.log(truncate("short short", 20));
