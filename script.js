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

/* Function to do operations of two given numbers. */
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

/* Function to clear display and assigned variables. */
function clearDisplay() {
  let clearString = "";
  updateDisplay(clearString);
}

/* Resets variables to intial assignments. */
function clearAssignVars() {
  str = "";
  num1 = "";
  num2 = "";
  operator = "";
  ans = "";
}

/* Function to remove the last character of displayed String. */
function backSpace(value) {
  let updateString = value.substring(0, value.length-1); // remove last character.
  str = updateString;
  updateDisplay(str);
}

/* Function to update the display. */
function updateDisplay(val) {
  display.textContent = val;
  console.log(display.textContent);
}

/* Function to get the second number to operate. */
function getOperand2(val) {
  let unprocessed = val.match(/[%*+/-](.*)/g);
  let unprocessedStr = unprocessed[0];
  return unprocessedStr.slice(1);
}

/* Function to retrieve ans and others after pressing '=' */
function getAns() {
  num2 = getOperand2(str);
  ans = operate(num1, num2, operator);
  console.log(num1 + " " + operator + " " + num2 + " = " + ans);
  num1 = ans;
  str = ans;
  console.log(str);
  clearDisplay();
  updateDisplay(str);
}

/* Function to assign the operator update String. */
function assignOperator(val) {
  operator = val;
  if (str !== "") { 
    num1 = str; 
  } else { 
    num1 = ans;
  }
  console.log("op1", num1);
  console.log("operator", operator);
  str += val;
  updateDisplay(str);
}

function buttonPress(e) {
  console.log('clicked');
  let value = e.target.textContent;

  if (value.match(regexEquals)) {
    getAns();
  } else if (value.match(regexOperators)) {
    assignOperator(value);
  } else if (value === "AC") {
    clearDisplay();
    clearAssignVars();
  } else if (value === "DEL") {
    backSpace(str);
  } else {
    str += value;
    updateDisplay(str);
  }

}

const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

btns.forEach(button => button.addEventListener('click', buttonPress));


