const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'test',
            message: "Aloha",
        },
    ]);
};

promptUser();