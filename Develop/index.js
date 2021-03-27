// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require(`./utils/generateMarkdown`)
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"];
const questions = [{
    type: "input",
    name: "githubUserName",
    message: "What is your Github username?"
}, {
    type: "input",
    name: "titleOfRepo",
    message: "What is the title of your project?"
}, {
    type: "input",
    name: "userEmail",
    message: "What is your email address?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
        console.log('Your readme has been created.');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        // console.log(data)
        var template = generateMarkdown(data)
        writeToFile("README.md", template)
        console.log(template)
    })
}

// Function call to initialize app
init();
