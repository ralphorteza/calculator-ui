let str = "";
let num1 = "";
let num2 = "";
let operator = "";
let ans = "";

const regexNumbers = /[0-9]/g;
const regexOperators = /[%*+/-]/g;
const regexEquals = /[=]/g;


/* operator functions */
const add = (a, b) => a + b;
const sub = (a,b) => a - b;
const mlt = (a,b) => a * b;
const div = function(a,b) {
  if (b !== 0) { return a / b;}
  return "lol";
}
const mod = (a,b) => a % b;


function operate(num1, num2, operator) { 
  let op1 = parseFloat(num1);
  let op2 = parseFloat(num2);
  let result = 0;
  if (operator === "+") { result = add(op1,op2); }
  if (operator === "-") { result = sub(op1,op2); }
  if (operator === "*") { result = mlt(op1,op2); }
  if (operator === "/") { result = div(op1,op2); }
  if (operator === "%") { result = mod(op1,op2); }

  return result;
}

function clearDisplay() {
  str = "";
  updateDisplay(str);
}

function backSpace() {
  str = str.substring(0, str.length-1); // remove last character.
  updateDisplay(str);
}

function updateDisplay(val) {
  display.textContent = val;
  console.log(display.textContent);
}

function buttonPress(e) {
  console.log('clicked');
  let value = e.target.textContent;
  if (value.match(regexEquals)) {
    let unprocessed = str.match(/[%*+/-](.*)/g);
    let unprocessedStr= unprocessed[0];
    num2 = unprocessedStr.slice(1);
    console.log("op2",num2);
    ans = operate(num1, num2, operator);
    num1 = ans;
    console.log("op1 in equals",num1);
    clearDisplay();
    updateDisplay(ans);
    str = num1;
    console.log(str);
  } else if (value.match(regexOperators)) {
    operator = value;
    num1 = str;
    console.log("op1",num1);
    console.log("operator", operator);
    str += value;
    updateDisplay(str);
  } else if (value === "clear") {
    clearDisplay();
  } else if (value === "backspace") {
    backSpace();
  } else {
    str += value;
    updateDisplay(str);
  }

}

const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

btns.forEach(button => button.addEventListener('click', buttonPress));


