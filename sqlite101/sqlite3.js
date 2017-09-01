"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('employees.sqlite', (err) => console.log('Connected'));

db.run('CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT)');

const empArr = [
    {
    id: 45,
    firstName: "Jane",
    lastName: "Smith",
    jobTitle: "CEO",
    address: "1 Main St."
    },
    {
    id: 46,
    firstName: "George",
    lastName: "Castanza",
    jobTitle: "Fireman",
    address: "1 Main St."
    },
    {
    id: 47,
    firstName: "Jack",
    lastName: "Black",
    jobTitle: "Singer",
    address: "1 Main St."
    },
    {
    id: 48,
    firstName: "Hillary",
    lastName: "Clinton",
    jobTitle: "President",
    address: "1 Main St."
    },
    {
    id: 49,
    firstName: "Donald",
    lastName: "Trump",
    jobTitle: "Devil",
    address: "1 Main St."
    },
    {
    id: 50,
    firstName: "Dog",
    lastName: null,
    jobTitle: "Bounty Hunter",
    address: "1 Main St."
    }
];


empArr.forEach( (employee) => {
    db.run(`INSERT INTO employees VALUES(
        ${employee.id},
        "${employee.firstName}",
        "${employee.lastName}",
        "${employee.jobTitle}",
        "${employee.address}")`
    )
})

db.all('SELECT * FROM employees', (err, empArr) => {
        console.log(empArr);   
});

db.all('SELECT jobTitle FROM employees', (err, results) => {
        console.log(results);
});

db.all('SELECT firstName, lastName, address FROM employees', (err, results) => {
    console.log(results);
})