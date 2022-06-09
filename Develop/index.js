// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const projectDescription = () => {
    console.log(`
    =================
    Description of Project
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        // *Add option for description
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for this project?'
        },
        {
            type: 'input',
            name: 'solutions',
            message: 'What problem does it solve?'
        },
        {
            type: 'input',
            name: 'takeaways',
            message: 'What did you learn?'
        },
        {
            type: 'confirm',
            name: 'addContents',
            message: 'Would you like to add a table of contents?',
            default: false,
        }
    ])
    .then(descriptionData => {
        if (descriptionData.confirmAddContents) {
            return tableOfContents(descriptionData);
        } else {
            installationQuestions(descriptionData);
        }
    })
};

// ! FIX THE SKIP OVER TABLE OF CONTENTS
const tableOfContents = descriptionData => {
    console.log(`
    =============
    Table of Contents
    =============
    `);
    return inquirer.prompt([])
}

const installationQuestions = descriptionData => {
    console.log('I am from a diff function');
}

projectDescription()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();