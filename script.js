function calculate(input) {
  let f = {
            add: '+',
            sub: '-',
            div: '/',
            mlt: '*',
            mod: '%'
          };

  // only accept numbers and f values
  input = input.replace(/[^0-9%^*\/()\-+.]/g, '');

  console.log(input);
}


const add = (a,b) => { a + b; };
const subtract = (a,b) => { a - b; };
const multiply = (a,b) => { a * b; };
const divide = (a,b) => { a / b; };
const modulus = (a,b) => { a % b; };

function operate(num1, num2, op) { 

}
