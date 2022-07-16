
function operate(num1, num2, op) { 
  result = num1 * 1;
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

let num1 = "";
console.log(num1);
const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');
console.log(display.textContent);

btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log('clicked');
    let value = button.textContent;
    num1 += value;
    updateDisplay();
    console.log(num1);

  });
});

function updateDisplay() {
  display.textContent = num1;
}