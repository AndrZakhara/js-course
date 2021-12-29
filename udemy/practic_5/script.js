////change USD
const inputUAH = document.querySelector("#uan");
const inputUSD = document.querySelector("#usd");

inputUAH.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open("GET", "current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.readyState === 4 ) {
      const data = JSON.parse(request.response);
      inputUSD.value = (+ inputUAH.value / data.current.usd).toFixed(2);
    } else {
      inputUSD.value = " something  don't so! ";
    }
  });
});
