
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

const btns = document.querySelectorAll('button');
const display = document.getElementsByClassName('display');
console.log(display.textContent);

btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log('clicked');
    console.log(button.textContent);
    console.log(e.target);
    let value = button.textContent;
    console.log(value);
    display.textContent += `${value}`;
    console.log(display.textContent);
  });
});