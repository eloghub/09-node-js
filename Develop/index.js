// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require(`./utils/generateMarkdown`)
const fs = require("fs");
const license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

// TODO: Create an array of questions for user input
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
}, {
    type: "input",
    name: "description",
    message: "Please describe your project:"
}, {
    type: "input",
    name: "installation",
    message: "Briefly explain the installation instructions for your project:"
}, {
    type: "input",
    name: "usage",
    message: "Briefly explain the user information for your project:"
}, {
    type: "input",
    name: "contributing",
    message: "Briefly explain the contributing guidelines for your project:"
}, {
    type: "input",
    name: "test",
    message: "Briefly explain the user test instructions for your project:"
}, {
    type: "list",
    name: "license",
    message: "Select what type of license you want to attach to your project:",
    // choices:
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
        var template = generateMarkdown(data)
        writeToFile("README.md", template)
        console.log(template)
    })
}

// Function call to initialize app
init();
