const arr = [34, 79, 4, 56, 7]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      console.log([array[i], array[j]])
    //   console.log(arr)
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(arr)

// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function fn() {
//     // arr.sort((a, b) => {
//     //     return (1 - Math.random()*2)
//     // })

//     // console.log(arr)
//     // return null
//     const arrCopy = arr.map(el => el)
//     const arrIndexes = []

//     arrCopy.forEach((elem, index) => {
//         let insertIndex;

//         do {
//             insertIndex = randomInteger(0, arrCopy.length - 1)
//         } while (arrIndexes.includes(insertIndex))
        
//         arrIndexes.push(insertIndex)
        
//         arr[index] = arrCopy[insertIndex]
//     }) 
// }
// console.log(arr)

// fn()

// console.log(arr)
