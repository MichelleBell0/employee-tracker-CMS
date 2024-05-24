-- View all employees
SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS manager  
FROM employee e
FULL JOIN role r
ON e.role_id = r.id
FULL JOIN department d
ON r.department_id = d.id
LEFT JOIN employee e2
ON e.manager_id = e2.id;

-- View all roles
SELECT r.id, r.title, d.department_name AS department, r.salary 
FROM role r
INNER JOIN department d
ON r.department_id = d.id;

-- View all departments
SELECT * FROM department;
