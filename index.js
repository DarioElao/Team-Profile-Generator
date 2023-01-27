//variables
const buildHTML = require('./src/profilesHTML')

const Manager = require ('./lib/Manager')
const Engineer = require ('./lib/Engineer')
const Intern = require ('./lib/Intern')

const fs = require('fs')
const inquirer = require('inquirer')

//questions array variable
const teamArr = [];

//questions prompt for managers
const buildManagerCard = () => {
    return inquirer.prompt ([
        {
        type: 'input',
        name: 'name',
        message: "What's the manager's name?", 
        },
        {
        type: 'input',
        name: 'id',
        message: "What's the manager's ID?",
        },
        {
        type: 'input',
        name: 'email',
        message: "What's the manager's email?",
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "What's the manager's office number?",
        }
    ])
    //stores data for 'New Manager'
.then(managerData => {
    const  { name, id, email, officeNumber } = managerData; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArr.push(manager); 
})
};


//questions prompt for new employees
const buildEmployeeCard = () => {
    return inquirer.prompt ([
        {
        type: 'list',
        name: 'role',
        message: "Choose your employee's role",
        choices: ['Engineer', 'Intern']
        },
        {
        type: 'input',
        name: 'name',
        message: "What's the employee's name?", 
        },
        {
        type: 'input',
        name: 'id',
        message: "What's employee's ID?",
        },
        {
        type: 'input',
        name: 'email',
        message: "What's the employee's email?",
            
        },
        {
        type: 'input',
        name: 'github',
        message: "What's the employee's github username?",
        },
        {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        },
        {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Would you like to add more employees?',
        default: false
        }
    ])
//stores new employee data after verifying their role
.then(employeeData => {

    const { name, id, email, role, github, school, newEmployee } = employeeData; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);
    }

    teamArr.push(employee); 

//if the user wants to add a new employee, return employee questions prompt
    if (newEmployee) {
        return buildEmployeeCard(teamArr); 
    } else {
        return teamArr;
    }
})
};


//builds the HTML cards with the stored data
buildManagerCard()
.then(buildEmployeeCard)
.then(teamArr => {
    return buildHTML(teamArr);
})
.then(createHTML => {
    return writeFile(createHTML);
})

//creates HTML file
function writeFile(data) {
    fs.writeFile('./dist/index.html', data, (error) =>
    error ? console.error(error) : console.log(data)
    );
};
    