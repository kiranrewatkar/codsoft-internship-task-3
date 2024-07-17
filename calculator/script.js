document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    function clear() {
      currentInput = '0';
      firstOperand = null;
      operator = null;
      waitingForSecondOperand = false;
      updateDisplay();
    }
  
    clear();
  
    document.querySelectorAll('.number').forEach(button => {
      button.addEventListener('click', function () {
        const number = button.textContent;
  
        if (currentInput === '0' || waitingForSecondOperand) {
          currentInput = number;
          waitingForSecondOperand = false;
        } else {
          currentInput += number;
        }
  
        updateDisplay();
      });
    });
  
    document.querySelectorAll('.operator').forEach(button => {
      button.addEventListener('click', function () {
        const op = button.textContent;
  
        if (operator !== null && !waitingForSecondOperand) {
          calculate();
        }
  
        firstOperand = parseFloat(currentInput);
        operator = op;
        waitingForSecondOperand = true;
      });
    });
  
    document.getElementById('equals').addEventListener('click', function () {
      calculate();
    });
  
    document.getElementById('clear').addEventListener('click', function () {
      clear();
    });
  
    function calculate() {
      if (operator === '+') {
        currentInput = (firstOperand + parseFloat(currentInput)).toString();
      } else if (operator === '-') {
        currentInput = (firstOperand - parseFloat(currentInput)).toString();
      } else if (operator === '*') {
        currentInput = (firstOperand * parseFloat(currentInput)).toString();
      } else if (operator === '/') {
        currentInput = (firstOperand / parseFloat(currentInput)).toString();
      }
  
      operator = null;
      firstOperand = parseFloat(currentInput);
      waitingForSecondOperand = false;
      updateDisplay();
    }
  
    document.getElementById('decimal').addEventListener('click', function () {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
      }
    });
  });
  