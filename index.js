// TODO: Include packages needed for this application
const inquirer=require('inquirer')
const generateMarkdown=require("./utils/generateMarkdown");
const fs=require('fs')
// TODO: Create an array of questions for user input
const questions = ['What is your project title?', 'Enter discription of your poroject','Enter installation for your app.','Enter usage information','Enter contribution guidelines','Enter test instructions','Select licence','What is your gitHub username?','What is your email address?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let formatedFileName=`${fileName.split(' ').join('')}.md`;
    fs.writeFile(formatedFileName,data,(err) => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
        type:'input',
        message:questions[0],
        name: "title"
        },
    
        {
            type:'input',
            message:questions[1],
            name: "description"
        },
        {
            type:'input',
            message:questions[2],
            name: "installation"
        },
        // {
        //     type:'input',
        //     message:questions[3],
        //     name: "description"
        // },
        {
            type:'input',
            message:questions[3],
            name: "usage"
        },
        {
            type:'input',
            message:questions[4],
            name: "contributing"
        },
        {
            type:'input',
            message:questions[5],
            name: "test"
        },
        {
            type:'input',
            message:questions[7],
            name: "gitHubUsername"
        },
        {
            type:'input',
            message:questions[8],
            name: "email"
        },
        {
            type:'list',
            message:questions[6],
            name:'licences',
            choices:["MIT",'Apache_2.0','GPLv3','BSD_3_Clause','none']

        }
    ]).then(responce=>{
     console.log(responce)
     //generateMarkdown(responce)
     writeToFile(responce.title, generateMarkdown(responce))
     console.log(generateMarkdown(responce))
    })
}

// Function call to initialize app
init();
