function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators")
const display = document.querySelector("div.display p")
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

let firstNumber = '';
let secondNumber = '';
let operator = '';
display.textContent = '0'

// Takes everything in string type
function operate (operator, firstNumber, secondNumber) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
    }
}

digits.addEventListener("click", (event) => {
    if (event.target != digits) {
        let clickedButton = event.target;
        let num = clickedButton.textContent;

        if (operator === '=') {
            operator = '';
            firstNumber = '';
            secondNumber = '';
        }

        if (operator === '') {
            if (firstNumber.includes('.') && num ==='.'){
                return;
            }
            firstNumber = firstNumber + num;
            display.textContent = firstNumber;
        } else {
            if (secondNumber.includes('.') && num ==='.'){
                return;
            }
            secondNumber = secondNumber + num;
            display.textContent = secondNumber;
        }
        
    }
})

operators.addEventListener("click", (event) => {
    let clickedButton = event.target;
    
    if (firstNumber ==='') {
        firstNumber = '0';
        display.textContent = firstNumber;
    } else if (secondNumber !== '') {
        if (secondNumber === '0' && operator === '/') {
            alert("Can't divide by. 0");
            firstNumber = '';
            secondNumber = '';
            operator = '';
            display.textContent = '0';
        } else {
            let result = operate(operator, firstNumber, secondNumber);
            firstNumber = Number.isInteger(result) ? String(result) : result.toFixed(2);
            secondNumber = '';
            display.textContent = firstNumber;
        }
    }
    operator = clickedButton.textContent;
})

clear.addEventListener("click", () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '0';
})

backspace.addEventListener("click", () => {
    if (operator === '') {
            firstNumber = firstNumber.slice(0, firstNumber.length - 1);
            display.textContent = firstNumber;
        } else {
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            display.textContent = secondNumber;
        }
})


