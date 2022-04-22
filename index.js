const inquirer = require('inquirer');
const cTable = require('console.table');


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
                    return getDepartments()
                case 'View all roles':
                    return getRoles()
                case 'View all employees':
                    return getEmployees()
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

const getDepartments = () =>
    fetch('/api/departments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
)


const getRoles = () =>
  fetch('/api/roles', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
);

const getEmployees = () =>
  fetch('/api/employees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
);

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
            choices: ['Sales', 'Accounting', 'Warehouse', 'HR']
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
            message: 'What is their role?',
            choices: ['Lead Salesman', 'Sr Salesman', 'Jr Salesman', 'Accountant Manager', 'Accountant', 'Warehouse Supervisor', 'Warehouse Clerk', 'HR Manager', 'HR Representative']
        }
    ])
        .then(employee => console.log(employee))
        .then(mainQuestion)
}

initApp();

