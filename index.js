// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
  ////ask for inputs
  const answers = await inquirer.prompt([
    {
      message: "GitHub name: ",
      name: "github",
    },
    {
      message: "Email address: ",
      name: "email",
    },
    {
      message: "Name of the project: ",
      name: "filename",
    },
    {
      message: "Write a short description of the project: ",
      name: "description",
    },
    {
      type: "list",
      message: "What license should your project have: ",
      choices: ["Apache License 2.0", "GNU GPLv3", "ISC License", "MIT"],
      name: "license",
    },
    {
      message: "Command to install dependencies: ",
      name: "install",
    },
    {
      message: "Command to run tests: ",
      name: "tests",
    },
    {
      message: "Usage of the repo: ",
      name: "usage",
    },
    {
      message: "Contributing to the repo: ",
      name: "contribution",
    },
  ]);
  console.log(answers);

  ///call functions to generate file
  const markDown = await generateMarkdown(answers);

  writeToFile("README.md", markDown);
}

// Function call to initialize app
init();
