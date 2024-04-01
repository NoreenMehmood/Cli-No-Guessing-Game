#! /usr/bin/env node
import inquirer from "inquirer";
const computer_number = Math.floor(Math.random() * 5 + 1);
const result = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-5",
    },
]);
// Condition
if (result.userGuessedNumber === computer_number) {
    console.log("congratulation!you guess a right number");
}
else {
    console.log("wrong number,Try again");
}
