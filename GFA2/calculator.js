
function calculate(operation) {
    
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultDisplay = document.getElementById("result");
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerText = "Please enter valid numbers.";
        return;
    }
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            resultDisplay.innerText = `The sum of ${num1} and ${num2} is ${result}.`;
            break;
        case '-':
            result = num1 - num2;
            resultDisplay.innerText = `The difference between ${num1} and ${num2} is ${result}.`;
            break;
        case '*':
            result = num1 * num2;
            resultDisplay.innerText = `The product of ${num1} and ${num2} is ${result}.`;
            break;
        case '/':
            if (num2 === 0) {
                resultDisplay.innerText = "Division by zero is not allowed.";
                return;
            }
            result = num1 / num2;
            resultDisplay.innerText = `The quotient of ${num1} and ${num2} is ${result}.`;
            break;
        case '%':
            if (num2 === 0) {
                resultDisplay.innerText = "Modulo by zero is not allowed.";
                return;
            }
            result = num1 % num2;
            resultDisplay.innerText = `The remainder of ${num1} divided by ${num2} is ${result}.`;
            break;
        default:
            resultDisplay.innerText = "Invalid operation.";
    }
}
