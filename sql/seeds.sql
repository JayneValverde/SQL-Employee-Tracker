USE employee_db;

INSERT INTO department(name)
VALUES 
('Sales'),
('Legal'),
('Finance'),
('Engineering');

INSERT INTO role 
(title, salary, department_id)

VALUES
('Sales Lead', 100000, 1),
('Sales Associate', 80000, 1),

('Legal Team Lead', 250000, 2)
('Lawer', 190000, 2),

('Account Manager', 160000, 3),
('Accountant', 125000, 3),

('Lead Engineer' 150000, 4),
('Software Engineer', 120000, 4);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)

-- TODO: are the roll(id)s matching with the manager(id)s???
VALUES
('John', 'Doe', 1, NULL),
('Mike', 'Smith', 2, 1),

('Maria', 'Garcia', 3, NULL),
('Robert', 'Johnson', 4, 3),

('Penny', 'Clifford', 5, NULL),
('Randy', 'Gilmore', 6, 5),

('Oliver', 'Walker', 7, NULL),
('Helen', 'Sawyer', 8, 7);

