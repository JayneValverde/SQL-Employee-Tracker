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

connection.connect(function(err) {
    if(err) throw err;
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
                "Update Employee Manager",
                // console.log(`===========`),
                "Delete Employee",
                "Delete Role",
                "Delete Department",
                "Exut Menu",
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
// ADD NEW EMPLOYEE ===============================================================
const addNewEmployee = () => {
    connection.query('SELECT * FROM role', (err, roles) => {
        if (err) console.log(err);
        roles = roles.map((role) => { 
            return { 
                name: role.title, 
                value: role.id, 
            };
        });
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter first name of new Employee'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter last name of new Employee'
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Enter new employee role',
                    choices: roles, 
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Select a manager id',
                    choices: [1, 3, 5, 7]
                }
            ])
            .then((data) => {
                console.log(data.role);
                connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: data.firstName, 
                        last_name: data.lastName, 
                        role_id: data.role, 
                        manager_id: data.managerId
                    },
                    (err) => {
                        if (err) throw err; 
                        console.log('Update Employee Roster;');
                        viewAllEmployees();
                    }
                );
            });
    });
};

// ADD NEW ROLE ===============================================================
const addNewRole = () => {
    connection.query('SELECT * FROM department', (err, departments) => {
        if (err) console.log(err); 
        departments = departments.map((department) => {
            return {
                name: department.name, 
                value: department.id, 
            };
        });
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newRole',
                    message: 'Enter title of new role'
                },
                {
                    type: 'input',
                    name: 'salary', 
                    message: 'Enter salary of new role'
                },
                {
                    type: 'list', 
                    name: 'departmentId',
                    message: 'Enter department of new role', 
                    choices: departments, 
                },
            ])
            .then((data) => {
                connection.query(
                    'INSERT INTO role SET ?',
                    {
                        title: data.newRole, 
                        salary: data.salary, 
                        department_id: data.departmentId, 
                    },
                    function (err) {
                        if (err) throw err;
                    }
                );
                console.log('added new employee role!')
                viewAllRoles();
            });
    });
};

// ADD NEW DEPARTMENT ===============================================================
const addNewDepartment = () => {
    inquirer 
        .prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'Enter new department name'
            },
        ])
        .then((data) => {
            connection.query('INSERT INTO department SET ?',
            {
                name: data.newDepartment, 
            },
            function (err) {
                if (err) throw err;
            }
        );
        console.log('New department added to database')
        viewAllDepartments();
        });
};

connection.connect((err) => {
    if (err) throw err; 

    firstPrompt();
});



// TODO: Async Funcitons? 