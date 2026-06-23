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

let firstNumber = null;
let secondNumber = null;
let operator = null;

// Take everything in string type
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

const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators")
const display = document.querySelector("div.display p")

digits.addEventListener("click", (event) => {
    let clickedButton = event.target;
    // If operator '='
        // Set operator to null;
        // Set first number to null;
        // Set second number to null;
    // If first number is null, asign the number to first number
    // else if the operator is null, append the number to the end of first number;
    // else if second number is null assign the number to the second number
    // else if the second number is not null, append the number to the end of the second number
    firstNumber = clickedButton.textContent;
    display.textContent = firstNumber;
})

// Add click evenlistener to operators, when clicked: 
    // If second num is not null
        // If operator == '/' and second num = 0, display "Can't divide by 0"
        // Compute the last computation using operate, round the result to 2 decimal digits
        // Update the display to the result of the last computation 
        // Reassign the first number to the result of the last computaion
        // Reassign the second number to null;
    // Assign operator to the content of the clicked button, including '=';
    // Display first number (now is the result of the last computation);

// Add click evenlistener to clear
    // Reset first num to null;
    // Reset second num to null;
    // Reset operator to null;


