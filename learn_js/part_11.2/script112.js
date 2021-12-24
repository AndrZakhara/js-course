//task 2
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout( () => {resolve()}, ms )
    });
}
delay(3000).then(() => console.log('Done in 3 sec.'));

//task 3


