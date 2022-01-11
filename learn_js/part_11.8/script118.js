//task 1
// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let aa = await response.json();
    return aa;
  } else {
    throw new Error(response.status);
  }
}
loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404

// //task 2
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

//  function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     })
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
//   let name = prompt("Введите логин?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }
// demoGithubUser();

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url)
  if (response.status == 200) {
    let jsonLoad = await response.json();
    return jsonLoad
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;

  while (true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`)
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  }
  alert(`Полное имя: ${user.name}.`);
  return user;
}
demoGithubUser();

//task 3
async function waitNum() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать waitNum() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"

  waitNum().then(resolve => {

    let multi = resolve ** 2;
    console.log(multi);
  });
}
f();
