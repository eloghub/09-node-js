# 09-node-js
Assignment 9: Creating a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptable Criteria DESCRIPTION:

* when the user is prompted for information about their application repository, then a high-quality, professional README.md is generated with the title of their project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

* when the user enters their project title, then this is displayed as the title of the README

* when the user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

* when the user chooses a license for their application from a list of options, then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

* when the user enters their GitHub username, then this is added to the section of the README entitled Questions, with a link to their GitHub profile

* when the user enters their email address, then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions

* when the user clicks on the links in the Table of Contents, then they are taken to the corresponding section of the README


## NOTES/CHALLENGES:

+ line 2 (JS) - [inquirer](https://www.npmjs.com/package/inquirer#objects) was referenced so the user can input information

+ line 4 (JS) - [fs](https://nodejs.org/api/fs.html) was also referenced


### WALKTHROUGH VIDEO:

```md
![#-screenshot](./Assets/#.jpg)
```

### LINK:

* [deployed application](#)