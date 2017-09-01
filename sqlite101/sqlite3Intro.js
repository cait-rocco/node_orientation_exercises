"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('company.sqlite', (err) => console.log('Connected'));

db.run('DROP TABLE IF EXISTS employees');

const createEmployeesTable = () => {
    db.run('CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, salary INT, department TEXT');
};

createEmployeesTable();

// db.run('INSERT INTO employees VALUES (1, "Fred', "Jones", 23000, "Janitorial")');
// db.run('INSERT INTO employees VALUES (1, "Linda', "Mack", 83000, "CTO")');

const populateEmployees = () => {
    const { list } = require('./employees.json');
    list.forEach( (employee) => {
        db.run(`INSERT INTO employees VALUES(
            ${employee.id},
            "${employee.firstName}",
            "${employee.lastName}",
            ${employee.salary},
            "${employee.dept}")`
        )
    })
};

populateEmployees();

db.get('SELECT FROM employees', (err, {id, first, last, department, salary}) => {
    console.log('from db.get');
    console.log(`${id} ${first} ${last} ${department} ${salary}`);    
});

db.all('SELECT * FROM employees', (err, allRows) => {
    console.log('all rows', allRows);
    if (err) {
        return console.log('err', err.toString());
    }
    allRows.sort( (a, b) => a.first.localeCompare(b.first))
    .filter((emp) => emp.salary > 50000)
    .map((emp) => `${emp.first} ${emp.last}'s salary: ${emp.salary}`)
    .forEach( (emp) => console.log(emp));
});




db.all(`SELECT first, last, salary 
        WHERE salary > 50000 
        FROM employees 
        ORDER BY first`, (err, allRows) => {
            console.log('all rows', allRows);
});

db.each('SELECT * FROM employees', (err, { id, first, last, department, salary}) => {
    if(err) {
        return console.log(err.toString());
    }
    console.log('${id} ${first} ${last}');
})











