
// Generate operands from 1 to 20 and choose a random arithmetic operator.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

// Calculate the answer based on the selected operator.
switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = firstNumber / secondNumber;
        break;
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
console.log(`Correct answer: ${operator === "/" ? correctAnswer.toFixed(2) : correctAnswer}`);