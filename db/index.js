const pool = require('./connection');

class DB {
    constructor() {}

    async query(sql, args = []) {
        const client = await pool.connect();
        try {
            const result = await client.query(sql, args);
            return result;
        } catch(err) {
            console.error(err);
        } finally {
            client.release();
        }
    }

    // View All Employees
    viewEmployees() {
        return this.query(`SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS manager  
        FROM employee e
        FULL JOIN role r
        ON e.role_id = r.id
        FULL JOIN department d
        ON r.department_id = d.id
        LEFT JOIN employee e2
        ON e.manager_id = e2.id`);
    }
    // Add Employee
    // Update Employee Role
    // View All Roles
    viewRoles() {
        return this.query(`SELECT r.id, r.title, d.department_name AS department, r.salary 
        FROM role r
        INNER JOIN department d
        ON r.department_id = d.id;`);
    }
    // Add Role
    // View All Departments
    viewDepartments() {
        return this.query('SELECT * FROM department');
    }
    // Add Department
    addDepartment(departmentName) {
        return this.query(`INSERT INTO department (department_name)
        VALUES ($1);`, [departmentName]);
    }

    // Quit
}

module.exports = DB;