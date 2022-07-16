
function operate(num1, num2, op) { 
  result = num1 * 1;
  op = String(op);
  if (op === '+') { result = num1 + num2; }
  if (op === '-') { result = num1 - num2; }
  if (op === '*') { result = num1 * num2; }
  if (op === '%') { result = num1 % num2; }
  if (op === '/') {
    if (num2 === 0) { result = "undefined"; }
    else { result = num1 / num2; }
  }

  return result;
}

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

    if (value === '=') {
      ans = operate(num1, num2, operator);
      updateDisplay(ans);
    } else if (value === '+' || value === '-' || value === '*' 
    || value === '/' || value === '%') {
      operator = value;
      updateDisplay(value);
    } else if ()
    num1 += value;
    updateDisplay();
    console.log(num1);

  });
});

function updateDisplay(val) {
  display.textContent = val;
}