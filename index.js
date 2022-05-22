const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "Enter your project title",
        },
        {
            type: 'input',
            name: 'description',
            message: "Enter your project description.",
        },
        {
            type: 'checkbox',
            name: 'installation',
            message: "Enter your project installation.",
            choices: ['HTML', 'JavaScript', "Python", "Fortran", "node", "npm"],
        },
        {
            type: 'input',
            name: 'usageContext',
            message: "Enter your project usage description.",
        },
        {
            type: 'input',
            name: 'usageLink',
            message: "Enter your project usage link or location. (default as type: ./assets/images/screenshot1.png)",
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Enter your project Contributing.",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Enter your project tests.",
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter your Github Username.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address.",
        },
    ]);
};

const generateREADME = ({title, description, installation, usageContext, usageLink, contributing, tests, name, email}) =>
`# ${title}

## Description (User Story)

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## usage
${usageContext}

![screenshot](${usageLink})

## contributing
${contributing}

## Tests
${tests}

## Questions
Link to the user's github: [Go to Github.](github.com/${name})
User's email address: ${email}
`

const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch(err => console.error(err));
}


init();