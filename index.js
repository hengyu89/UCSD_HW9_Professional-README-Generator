const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: "Enter your project title",
        },
        {
            type: 'input',
            name: 'Description',
            message: "Enter your project description.",
        },
        {
            type: 'input',
            name: 'Usage',
            message: "Enter your project usage.",
        },
        {
            type: 'input',
            name: 'Contributing',
            message: "Enter your project Contributing.",
        },
        {
            type: 'input',
            name: 'Tests',
            message: "Enter your project tests.",
        },
    ]);
};

promptUser();