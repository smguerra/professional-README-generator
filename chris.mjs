import inquirer from "inquirer";
import fs from 'fs/promises'

const {name, location, bio, linkedIn, github} = await inquirer
    .prompt([
        {
            name: 'name',
            input: 'input',
            message: "What is your name?"
        },
        {
            name: 'location',
            input: 'input',
            message: "Where are you from?"
        },
        {
            name: 'bio',
            input: 'input',
            message: "Tell us about yourself?"
        },
        {
            name: 'linkedIn',
            input: 'input',
            message: "What is your linkedIn?"
        },
        {
            name: 'github',
            input: 'input',
            message: "What is your github?"
        }
]);

console.log(name, location, bio, linkedIn, github);

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini_Project</title>
</head>
<body>
    <h1>${name}</h1>
    <h2>I am from ${location}</h2>
    <h2>Bio</h2>
    <p>${bio}</p>
    <h3>My linkedIn: https://www.linkedin.com/in/${linkedIn}</h3>
    <h3>Check out my github: https://github.com/${github}</h3>
    
</body>
</html>
`

await fs.writeFile('index.html', html)