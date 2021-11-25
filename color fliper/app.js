'use strict';

const ground = document.querySelector('body'),
  btn = document.getElementById('btn'),
  nameBtn = document.querySelector('.color');

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener('click', (event) => {
  event.preventDefault();

  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += arr[getRandom()];
  };

  document.body.style.backgroundColor = color;
  nameBtn.textContent = color;

});

function getRandom() {
  return (Math.floor(Math.random() * 16));
};
