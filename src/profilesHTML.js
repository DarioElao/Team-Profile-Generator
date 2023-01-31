
module.exports = cards => {
    
//Generates section for employee cards    
return ` 
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
    
    <header>
        <h1 class="text-center bg-dark text-white p-4">TEAM PROFILE</h1>
    </header>
    
    <main>
        <div class="container pt-5">
            <div class="row justify-content-center">
                ${teamCards(cards)}
    </main>
    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </html>
`
}

//Functions that creates cards for new employees
function teamCards(cards) {
    const html = cards.map((employee) => {

    const role = employee.getRole()

    if (role === 'Manager') {
        return `
            <div class="col-3 card m-4 flex-column bg-secondary">
                <div class="card-header bg-light m-2">
                    <h2>${employee.getName()}</h2>
                        <h3>${employee.getRole()}</h3>
                </div>

                <div class="card-body text-light">
                    <p>ID: ${employee.getId()}</p>
                        <p>Email: ${employee.getEmail()}</p>
                            <p>Number: ${employee.getOfficeNumber()}</p>
                </div>
                
            </div>`
            }

        else if (role === 'Engineer') {
            return `
            <div class="col-3 card m-4 flex-column bg-secondary">
                <div class="card-header bg-light m-2">
                    <h2>${employee.getName()}</h2>
                        <h3>${employee.getRole()}</h3>
                </div>

                <div class="card-body text-light">
                    <p>ID: ${employee.getId()}</p>
                        <p>Email: ${employee.getEmail()}</p>
                            <p>Github: ${employee.getGithub()}</p>
                </div>
                
            </div>`
            }

        else if (role === 'Intern') {
            return `
            <div class="col-3 card m-4 flex-column bg-secondary">
                <div class="card-header bg-light m-2">
                    <h2>${employee.getName()}</h2>
                        <h3>${employee.getRole()}</h3>
                </div>

                <div class="card-body text-light">
                    <p>ID: ${employee.getId()}</p>
                        <p>Email: ${employee.getEmail()}</p>
                            <p>School: ${employee.getSchool()}</p>
                </div>
                
            </div>`
        }
})
return html.join('');
}