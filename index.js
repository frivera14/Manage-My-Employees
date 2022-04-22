const inquirer = require('inquirer');


const initApp = () => {
    console.log('Welcome!')
    return mainQuestion()
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
                    return
                case 'View all roles':
                    return
                case 'View all employees':
                    return
                case 'Add Department':
                    return addDepartment()
                case 'Add Role':
                    return addRole()
                case 'Add Employee':
                    return addEmployee()
                default:
                    break;
            }
        });
};


const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department you wish to add?'

        }
    ])
        .then(department => console.log(department))
        .then(mainQuestion)
}

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What role would you like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What department are they part of?',
            choices: ['1', '2', '3', '4']
        }
    ])
        .then(role => console.log(role))
        .then(mainQuestion)
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is their first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is their last name?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is their role id?',
            choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        }
    ])
    .then(employee => console.log(employee))
    .then(mainQuestion)
}

initApp();

