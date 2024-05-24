const inquirer = require('inquirer');
const DB = require('./db');

const db = new DB();

// List of menu options
const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'Quit'
        ]
    }
];

async function showMenu() {
    const answers = await inquirer.prompt(menuOptions);
    handleUserChoice(answers.option);
}

async function handleUserChoice(choice) {
    switch (choice) {
        case 'View All Employees':
            const { rows: employees } = await db.viewEmployees();
            console.table(employees);
            break;
        case 'View All Roles':
            const { rows: roles } = await db.viewRoles();
            console.table(roles);
            break;
        case 'View All Departments':
            const { rows: departments } = await db.viewDepartments();
            console.table(departments);
            break;
        case 'Quit':
            console.log('Goodbye!');
            return;
        default:
            console.log('Invalid option!');
    }
    // Display the menu options again after handling the user's choice
    showMenu();
}

// Initiate the menu display
showMenu();