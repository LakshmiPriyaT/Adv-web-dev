// script.js

let currentInput = '';
let display = document.getElementById('display');

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}
