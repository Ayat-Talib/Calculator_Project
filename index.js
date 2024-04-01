#! usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: "Enter firstNumber :", type: "number", name: "firstNumber" },
    { message: "Enter secondNumber :", type: "number", name: "secondNumber" },
    { message: "Enter operator :", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
if (answer.operator === "Addition") {
    console.log("Your number after Addition is :", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your number after Subtraction is :", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your number after Multiplication is :", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your number after Division is :", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Choose a valid operator");
}
