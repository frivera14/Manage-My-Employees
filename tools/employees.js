const db = require('../db/connection');
const inquirer = require('inquirer');


const getEmployees = () => {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {

        console.table(rows)
    });
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
            message: 'What is their department?',
            choices: ['Sales', 'Accounting', 'Warehouse', 'HR']
        }
    ])
        .then(newbie => {
            const sql = `INSERT INTO employees (first_name, last_name, employee_department) VALUE (?, ?, ?)`;
            const params = [newbie.firstName, newbie.lastName, newbie.role]

            db.query(sql, params, (err, rows) => {

                console.log('Added!');
            });
        })
}




module.exports = { getEmployees, addEmployee };