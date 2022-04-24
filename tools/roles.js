const db = require('../db/connection')
const inquirer = require('inquirer');


const getRoles = () => {
    const sql = `SELECT * FROM roles`;
  
    db.query(sql, (err, rows) => {

      console.table(rows);
    })
};

const addRoles = () => {
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
            choices: ['Sales', 'Accounting', 'Warehouse', 'Human Resources']
        }
    ])
    .then((newbie) => {
        const sql = `INSERT INTO roles (title, salary, department_name) VALUE (?, ?, ?)`;
        const params = [newbie.title, newbie.salary, newbie.department_id]
    
        db.query(sql, params, (err, rows) => {
            console.log('Added!')
        });
    })
};



module.exports = { getRoles, addRoles };