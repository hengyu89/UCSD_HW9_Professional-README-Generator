const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "Enter your project title: ",
        },
        {
            type: 'input',
            name: 'description',
            message: "Enter your project description: ",
        },
        {
            type: 'checkbox',
            name: 'installation',
            message: "Enter your project installation: ",
            choices: ['HTML', 'JavaScript', "Python", "Fortran", "node", "npm"],
        },
        {
            type: 'input',
            name: 'usageContext',
            message: "Enter your project usage description: ",
        },
        {
            type: 'input',
            name: 'usageLink',
            message: "Enter your project usage link or location. (default as type: ./assets/images/screenshot1.png)",
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose your project License: ",
            choices: ['MIT', 'GNU'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Enter your project Contributing: ",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Enter your project tests: ",
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter your Github Username: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address: ",
        },
    ]);
};

const generateREADME = ({title, description, installation, usageContext, usageLink, licenseBadge, licenseContext, contributing, tests, name, email}) =>
`# ${title}
${licenseBadge}

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

## Credits


## License
${licenseContext}

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
    .then((answers) => {
        if(answers.license === 'MIT') {
            answers.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            answers.licenseContext = `MIT License

            Copyright (c) [year] [fullname]
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`
        } else if (answers.license === 'GNU') {
            answers.licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            answers.licenseContext = `GNU GENERAL PUBLIC LICENSE
            Version 3, 29 June 2007

            Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
            Everyone is permitted to copy and distribute verbatim copies
            of this license document, but changing it is not allowed.`
        }
        // Write the file.
        fs.writeFileSync('README.md', generateREADME(answers))
    })
    .then(() => console.log("Successfully wrote to README.md"))
    .catch(err => console.error(err));
}


init();