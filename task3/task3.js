const display = document.getElementById('result');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    if (currentOperator === null) {
        firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
        display.textContent = firstOperand;
    } else {
        secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
        display.textContent = secondOperand;
    }
}

function setOperator(operator) {
    if (firstOperand !== null && secondOperand !== null) {
        calculateResult();
    }
    currentOperator = operator;
}

function calculateResult() {
    if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
        let result;
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                result = null;
        }
        display.textContent = result;
        firstOperand = result;
        secondOperand = null;
        currentOperator = null;
    }
}

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.textContent = '';
}