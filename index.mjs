import inquirer from "inquirer";
import fs from 'fs/promises'

const {title, description, license, installation, usage, test, contributing, github, email} = await inquirer
    .prompt([
        {
            name: 'title',
            input: 'input',
            message: "What is your project's name?"
        },
        {
            name: 'description',
            input: 'input',
            message: "Please write a short description of your project?"
        },
        {
            name: 'license',
            input: 'checkbox',
            message: "What kind of license should your project have?",
            choices: ["None", "MIT License", "Boost Software License 1.0", "Apache License 2.0"]
        },
        {
            name: 'installation',
            input: 'input',
            message: "What command should be run to install dependencies?"
        },
        {
            name: 'usage',
            input: 'input',
            message: "How to use this programme?"
        },
        {
            name: 'test',
            input: 'input',
            message: "how to run a test?"
        },
        {
            name: 'contributing',
            input: 'input',
            message: "What does the user needs to know about contributing to the repo?"
        },
        {
            name: 'github',
            input: 'input',
            message: "What is your GitHub username?"
        },
        {
            name: 'email',
            input: 'input',
            message: "What is your email address?"
        },
]);

console.log(title, description, license, installation, usage, test, contributing, github, email);

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
    * [Tests](#tests)
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
    
    If you have any questions about the repo, open an issue or contact me directly at smguerra. you can find more information at: https://github.com/smguerra/professional-README-generator
`

await fs.writeFile('README.md', readme)