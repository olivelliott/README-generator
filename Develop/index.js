const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/readme-template.js');
const { writeFile } = require('./utils/generate-readme.js');

const projectDescription = () => {
    console.log(`
    =====================
    README INFORMATION
    =====================
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
            message: 'Please provide a description of your project. What was your goal? (Required)',
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
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for this project',
            choices: ['MIT', 'Apache 2.0', 'GPL']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your contribution guidelines for this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter how you would suggest the user to test your application'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please enter your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address so that users can contact you'
        }
    ])
};

projectDescription()
    .then(readmeData => {
        return generatePage(readmeData)
    })
    .then(fileContent => {
        return writeFile(fileContent)
    })