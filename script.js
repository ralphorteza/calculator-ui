
function operate(num1, num2, operator) { 
  let op1 = parseFloat(num1);
  let op2 = parseFloat(num2);

  if (operator === "+") { return add(op1,op2); }
  if (operator === "-") { return sub(op1,op2); }
  if (operator === "*") { return mlt(op1,op2); }
  if (operator === "/") { return div(op1,op2); }
  if (operator === "%") { return mod(op1,op2); }
}


/* operator functions */
const add = (a, b) => a + b;
const sub = (a,b) => a - b;
const mlt = (a,b) => a * b;
const div = function(a,b) {
  if (b !== 0) { return a / b;}
  return "lol";
}
const mod = (a,b) => a % b;

let str = "";
let num1 = "";
let num2 = "";
let operator = "";
let ans = "";
console.log(num1);
const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');
console.log(display.textContent);

btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log('clicked');
    let value = button.textContent;
    console.log(value);
    str += value;
    updateDisplay(str);
    console.log(str);

  });
});

function updateDisplay(val) {
  display.textContent = val;
}