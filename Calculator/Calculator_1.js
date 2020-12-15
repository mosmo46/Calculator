let num1 = "";
let mum2 = "";

function numberToInput(numInput) {
  Calculator.value += numInput; // 5
}

function operator(o) {
  num1 = Calculator.value + o; //2+
  Calculator.value = "";
}

function result() {
  let solution = eval(num1 + Calculator.value)
  Calculator.value = solution;
}

function clearInput() {
  Calculator.value = "";
}











