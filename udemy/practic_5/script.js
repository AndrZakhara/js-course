////change USD
const inputUAH = document.querySelector("#uan");
const inputUSD = document.querySelector("#usd");

inputUAH.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open("GET", "current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUSD.value = + inputUAH.value / data.current.usd;
    } else {
      inputUSD.value = " something  don't so! ";
    }
  });
});
