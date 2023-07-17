// TODO: Include packages needed 
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Print MySQL rows to the console 
require('console.table');

// TODO: Connect to database
const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Waffles90!',
        database: 'employee_db'
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        console.log(`
        ▄▀▀█▄▄▄▄  ▄▀▀▄ ▄▀▄  ▄▀▀▄▀▀▀▄  ▄▀▀▀▀▄    ▄▀▀▀▀▄   ▄▀▀▄ ▀▀▄  ▄▀▀█▄▄▄▄  ▄▀▀█▄▄▄▄      ▄▀▀▀█▀▀▄  ▄▀▀▄▀▀▀▄  ▄▀▀█▄   ▄▀▄▄▄▄   ▄▀▀▄ █  ▄▀▀█▄▄▄▄  ▄▀▀▄▀▀▀▄ 
        ▐  ▄▀   ▐ █  █ ▀  █ █   █   █ █    █    █      █ █   ▀▄ ▄▀ ▐  ▄▀   ▐ ▐  ▄▀   ▐     █    █  ▐ █   █   █ ▐ ▄▀ ▀▄ █ █    ▌ █  █ ▄▀ ▐  ▄▀   ▐ █   █   █ 
          █▄▄▄▄▄  ▐  █    █ ▐  █▀▀▀▀  ▐    █    █      █ ▐     █     █▄▄▄▄▄    █▄▄▄▄▄      ▐   █     ▐  █▀▀█▀    █▄▄▄█ ▐ █      ▐  █▀▄    █▄▄▄▄▄  ▐  █▀▀█▀  
          █    ▌    █    █     █          █     ▀▄    ▄▀       █     █    ▌    █    ▌         █       ▄▀    █   ▄▀   █   █        █   █   █    ▌   ▄▀    █  
         ▄▀▄▄▄▄   ▄▀   ▄▀    ▄▀         ▄▀▄▄▄▄▄▄▀ ▀▀▀▀       ▄▀     ▄▀▄▄▄▄    ▄▀▄▄▄▄        ▄▀       █     █   █   ▄▀   ▄▀▄▄▄▄▀ ▄▀   █   ▄▀▄▄▄▄   █     █   
         █    ▐   █    █    █           █                    █      █    ▐    █    ▐       █         ▐     ▐   ▐   ▐   █     ▐  █    ▐   █    ▐   ▐     ▐   
         ▐        ▐    ▐    ▐           ▐                    ▐      ▐         ▐            ▐                           ▐        ▐        ▐                  
        `)
        // runs the app
        firstPrompt();
    });

// TODO: Create prompts / arrays 

const firstPrompt = () => {

    inquirer
        .prompt({
            name: 'choices',
            type: 'list',
            message: 'PLEASE SELECT A MENU OPTION...',
            choices: [
                "View Employees",
                "View All Roles",
                "View All Departments",
                "Update Employee Role",
                "Add Employee",
                "Add Roll", 
                "Add New Department", 
                chalk.orange('Update Employee Manager'),
                chalk.orange('Delete Employee'),
                chalk.orange('Delete Role'),
                chalk.orange('Delete Department'),
                'Exut Menu',
            ],
        }).then((answers) => {
            const { choices } = answers; 

            if (choices === 'View All Employees') {
                viewAllEmployees();
            }
            if (choices === 'View All Rolles') {
                viewAllRoles();
            }
            if (choices === 'View All Departments') {
                viewAllDepartments();
            }
            if (choices === 'View Employees By Manager') {
                viewEmployeesByManager();
            }
            if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }
            if (choices === 'Add New Employee') {
                addNewRole();
            }
            if (choices === 'Add New Roll') {
                addNewDepartment();
            }
            if (choices === 'Add New Department') {
                addNewDepartment();
            }
            if (choices === 'Update Employee Managers') {
                updateEmployeeManagers();
            }
            if (choices === 'Delete Employee') {
                deleteEmployee();
            }
            if (choices === 'Delete Role') {
                deleteRole();
            }
            if (choices === 'Delete Department') {
                deleteDepartment();
            }
            if (choices === 'Exit Menu') {
                console.log('Logged out! Type npm start to login')
                connection.end();
            }
        });
};

// SQL SELECT * FROM statments for choices 
const viewAllEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    firstPrompt();
}

const viewAllRoles = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res);
    })
    firstPrompt();
}

const viewAllDepartments = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res); 
    })
    firstPrompt();
}

const viewEmployeesByManager = () => {
    const query = 'SELECT * FROM employee ORDER BY manager_id DESC';
    connection.query(query, (err, res) => {
        if (err) throw err; 
        console.table(res);
    })
    firstPrompt();
}


// TODO: VIEW Functions 


// TODO: ADD Functions 


// TODO: Async Funcitons?