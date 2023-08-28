function initCalculator() {
  const num1 = document.getElementById("num1") as HTMLInputElement;
  const num2 = document.getElementById("num2") as HTMLInputElement;

  const summBtn = document.getElementById("summ") as HTMLButtonElement;
  const substractBtn = document.getElementById("sub") as HTMLButtonElement;
  const multiplyBtn = document.getElementById("multiply") as HTMLButtonElement;
  const divideBtn = document.getElementById("divide") as HTMLButtonElement;
  const result = <HTMLElement>document.getElementById("result");

  function summNumbers(event) {
    event.preventDefault();
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let r = a + b;
    result.innerHTML = `Result: ${r.toString()}.`;
  }
  summBtn.addEventListener("click", summNumbers);

  function subNumbers(event) {
    event.preventDefault();
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let r = a - b;
    result.innerHTML = `Result: ${r.toString()}.`;
  }
  substractBtn.addEventListener("click", subNumbers);

  function multiNumbers(event) {
    event.preventDefault();
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let r = a * b;
    result.innerHTML = `Result: ${r.toString()}.`;
  }
  multiplyBtn.addEventListener("click", multiNumbers);

  function divideNumbers(event) {
    event.preventDefault();
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let r = a / b;
    result.innerHTML = `Result: ${r.toString()}.`;
  }
  divideBtn.addEventListener("click", divideNumbers);
}

export default initCalculator;
