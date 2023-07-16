// TODO: Include packages needed 
const mysql = require('mysql2');
const inquirer = require('inquirer');

// string styling
const chalk = require('chalk');

// FIGFont in Javascript
const figlet = require('figlet');

// Print MySQL rows to the console 
require('console.table');

// TODO: Connect to database
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        passowrd: '',
        database: 'employee_db'
    });

// TODO: Welcome Banner -> console.log
console.log(chalk.orange.bold('======================================================================================================='));
console.log(``);
console.log(chalk.green.bold(figlet.textSync('EMPLOYEE TRACKER')));
console.log(``);
console.log(`                               ` + chalk.blue.bold('(C)ONTENT (M)ANAGEMENT (S)YSTEM')); 
console.log(``);
console.log(chalk.orange.bold(`=======================================================================================================`))

// TODO: Create prompts / arrays 


// TODO: VIEW Functions 


// TODO: ADD Functions 


// TODO: Async Funcitons?