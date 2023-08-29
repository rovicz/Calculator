let rT = 0;
let b = "0";
let pO;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = b;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      b = "0";
      rT = 0;
      break;
    case "=":
      if (pO === null) {
        return;
      }
      flushOperation(parseInt(b));
      pO = null;
      b = rT;
      rT = 0;
      break;
    case "←":
      if (b.length === 1) {
        b = "0";
      } else {
        b = b.substring(0, b.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (b === "0") {
    return;
  }

  const intB = parseInt(b);

  if (rT === 0) {
    rT = intB;
  } else {
    flushOperation(intB);
  }
  pO = symbol;
  b = "0";
}

function flushOperation(intB) {
  if (pO === "+") {
    rT += intB;
  } else if (pO === "-") {
    rT -= intB;
  } else if (pO === "×") {
    rT *= intB;
  } else if (pO === "÷") {
    rT /= intB;
  }
}

function handleNumber(numberString) {
  if (b === "0") {
    b = numberString;
  } else {
    b += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
