const inquirer = require('inquirer');
const { addDepartment, getDepartments } = require('./tools/departments');
const { getEmployees, addEmployee } = require('./tools/employees');
const { getRoles, addRoles } = require('./tools/roles');

function initApp() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'what',
            message: 'Ready to manage?',
            default: false
        }
    ])
    .then(answer => {
        if (answer.what) {
            mainQuestion()
        } else{
            console.log('Goodbye!')
        }
    })
}

const mainQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'main',
            message: "What would you like to do?",
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add Department', 'Add Role', 'Add Employee']
        }
    ])
        .then(({ main }) => {
            switch (main) {
                case 'View all departments':
                    return getDepartments()
                case 'View all roles':
                    return getRoles()
                case 'View all employees':
                    return getEmployees()
                case 'Add Department':
                    return addDepartment()
                case 'Add Role':
                    return addRoles()
                case 'Add Employee':
                    return addEmployee()
                default:
                    break;
            }
        })
        .then(verifyQues)
};

const verifyQues = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'keep',
            message: 'Looking to do more?',
            default: false
        }
    ])
    .then(answer => {
        if (answer.keep) {
            mainQuestion()
        } else {
            console.log('Goodbye!')
        }
    })
}

initApp();