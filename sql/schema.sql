DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(30) NOT NULL, 
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL NOT NULL, 
    department_id INT NOT NULL, 
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL, 
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT NULL, 
    FOREIGN KEY (manager_id) REFERENCES employee(id),
    PRIMARY KEY (id)
);