'use strict';

let ground = document.querySelector('main'),
    btn = ground.querySelector('#btn'),
    nameBtn = ground.querySelector('span');

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


btn = addEventListener('click', (event) => {
    event.preventDefault();

    let color = '#';
    for (let i = 0; i < 6; i++) {

        color += arr[getRandom()];
    };

    ground.style.backgroundColor = color;
    nameBtn.textContent = color;

});

function getRandom() {
    return (Math.floor(Math.random() * 16));
};
