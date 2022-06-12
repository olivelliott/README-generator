// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//  ! TO DO:
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
const generatePage = require('./src/readme-template.js');
const { writeFile } = require('./utils/generate-readme.js')

//  ? Done - TEST
// WHEN I enter my project title
// THEN this is displayed as the title of the README
//  WHEN I click on the links in the Table of Contents
//  THEN I am taken to the corresponding section of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



// TODO: Create an array of questions for user input
const projectDescription = () => {
    console.log(`
    =====================
    README INFORMATION
    =====================

    ** If you would like to skip a step, please press the "return" key **
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Please place a "/" after each individual step',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use of your project'
        },
        {
            type: 'input',
            name: 'media',
            message: 'Please enter a relative path from your intended README location to a screenshot or video explaining the usage of your project',
            // default: false
        },
        //  * Contributing and tests
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your contribution guidelines for this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you wrote tests for your application, please provide examples on how to run them here'
        }
    ])
};

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions


projectDescription()
    .then(readmeData => {
        return generatePage(readmeData)
    })
    .then(fileContent => {
        console.log(fileContent);
        return writeFile(fileContent)
    })
    // .then (fileContent => {
    //     return writeFile(fileContent);
    // })


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();