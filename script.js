
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
