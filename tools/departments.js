const db = require('../db/connection');
const inquirer = require('inquirer');

const getDepartments = () => {
    const sql = `SELECT * FROM departments`;
  
    db.query(sql, (err, rows) => {

      console.table(rows)
    })
};


const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department you wish to add?'
        }
    ])
    .then(answers => {
        const sql = `INSERT INTO departments (name) VALUE (?)`;
        const params = [answers.department]
    
        db.query(sql, params, (err, rows) => {
   
        console.log('Added!')
        });
    })
}
module.exports = { getDepartments, addDepartment }

