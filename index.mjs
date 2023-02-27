import inquirer from "inquirer";
import fs from 'fs/promises';

// Destructuring 

const {title, description, license, installation, usage, test, contributing, github, email} = await inquirer
    .prompt([
        {
            name: "title",
            type: "input",
            message: "What is your project's name?"
        },
        {
            name: "description",
            type: "input",
            message: "Please write a short description of your project?"
        },
        {
            name: "license",
            type: "input" ,
            message: "What kind of license should your project have?",
        },
        {
            name: "installation",
            type: "input",
            message: "What command should be run to install dependencies?"
        },
        {
            name: "usage",
            type: "input",
            message: "How to use this programme?"
        },
        {
            name: "test",
            type: "input",
            message: "how to run a test?"
        },
        {
            name: "contributing",
            type: "input",
            message: "What does the user needs to know about contributing to the repo?"
        },
        {
            name: "github",
            type: "input",
            message: "What is your GitHub username?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address?"
        }
])

//console.log(title, description, license, installation, usage, test, contributing, github, email);

const readme = `
# Project Title
${title}

## Description
${description}

## Table of Contents 
* [Installation](#installation) 
* [Usage](#usage) 
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)
    
## Installation
${installation}

## How to use this programme?
${usage}

## License 
${license}

## Contributing
${contributing}

## Tests
${test}

## Questions
    
If you have any questions about the repo, open an issue or contact me directly at ${email}. you can find more information at: https://github.com/smguerra/professional-README-generator
`

await fs.writeFile('README.md', readme);