// //task 1 
// function start() { showCircle(500, 300, 200, callback) };

// let callback = div => {
//   div.classList.add('message-ball');
//   div.append('Hello, world!');
// };

// function showCircle(cx, cy, radius, callback) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   setTimeout(() => {
//     div.style.width = radius * 2 + 'px';
//     div.style.height = radius * 2 + 'px';

//     div.addEventListener('transitionend', function handler() {
//       div.removeEventListener('transitionend', handler);
//       callback(div);
//     });

//   }, 500);
// };

////task 2 part_11.2
function start() {
  showCircle(500, 300, 200).then(div => {
    div.classList.add('message-ball');
    div.append("PROMISE!");
  })
};

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise( resolve => {
    setTimeout( () => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0 )
  })
};
