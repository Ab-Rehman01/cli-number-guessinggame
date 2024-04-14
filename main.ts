#! /usr/bin/env node
// shabang
import inquirer from "inquirer";
// computer will gen a random number
// user input for guess
//compare user input

const randomNumber = Math.floor(Math.random()*10+1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "guess a number between 1-10",
    },
]);
console.log(answers);
if(answers.userGuessedNumber===randomNumber){
    console.log("Congratulation! you guess the right number")

}else{

    console.log("Sorry you guess wrong the number ")
} 