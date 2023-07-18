# SQL-Employee-Tracker
## Jayné M. Valverde <br> 
Employee Tracker using MySQL <br> 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### **_[LINK TO WALKTHROUGH VIDEO](https://www.youtube.com/watch?v=hUyMRiJQq0Y)_**

## Description : 
***MySQL*** <br>
This applicaiton with allow non-developers to easily view and interact with a *company's employee database using a **content managment system(CMS)**. 
It is built as a command-line app using *Node.js*, *Inquirer*, and *MySQL*. 


## Table of COntents : 
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [License](#license)
* [Resources](#resources)
* [Questions](#questions)

## User Story : 
```
AS A a business owner 
I WANT to be able to view and manage the departments, roles and employees in my company
SO THAT I can organize and plan my business 
```
![screenshot example](./images/demo(example).png)

## Acceptance Criteria : 
```
GIVEN a command-line application that accepts user input 
WHEN I start the application 
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee and update an employee role
WHEN I choose to view all roles 
THEN I am presented with the job title, role id, the departments that role belongs to and the salary for that role 
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department 
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am mprompted to enter the name, salary and department for the role and that role is added to that database
WHEN I choose to add an employee
THEN I am prompted to enter the employee's first name, last name, role and manager - that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and their information is updated in the database
```
## Installation : 
* Clone from GitHub
* Open project directory, then do an `npm install` of all required dependencies.

## Usage : 
* Install `npm init -y` to create a new .json file
* `npm i`
* `npm i inquirer`
* `npm i console.table`
* Make sure to run `mysql -u root -p` to gain access to MYSQL before continuing 
* `npm start`
* Run through prompts as required 

## Screenshots : 
![Landing page](./images/landing%20page.png)

## Resources : 

**ASK BCS**: <br>
Again, this week I opened alot of tickets and asked for lots of help from BCS. I would not have gotten this code to where it is without them. Hopped on a few zoom calls and they fixed a lot of syntax problems I kept running into. 

**MODULE 12 assignments**: <br>
I leaned heavily and taking code from assignments we went through in class. 

## License :
This project is licensed under MIT

## Questions : 
Follow me on GitHub at [JayneValverde](https://github.com/JayneValverde) <br>
Contact me at Jaynevalverde@gmail.com <br>
Thank you!
