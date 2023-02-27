import inquirer from "inquirer";
import fs from 'fs/promises'

const {title, description, license, installation, usage, test, contribution, github, email} = await inquirer
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
            name: 'contribution',
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

console.log(title, description, license, installation, usage, test, contribution, github, email);

const readme = `
    # Project Title
    ${title}
    ## Description
    ${description}
    ## Table of Contents 
    * [Installation] 
    * Usage 
    * License 
    * Contributing 
    * Tests 
    * Questions
    <h3>My linkedIn: https://www.linkedin.com/in/${linkedIn}</h3>
    <h3>Check out my github: https://github.com/${github}</h3>
    
</body>
</html>
`

await fs.writeFile('README.md', readme)