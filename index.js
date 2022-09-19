const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = ({
    github,
    linkedin,
    email,
    questions,
    license,
    title,
    motivation,
    project,
    solve,
    learn,
    description,
    table,
    installation,
    usage,
    images,
    credits,
  }) =>
  `# ${(title)}

  

  ## Description of Project 
  ${(description)}
  
  - What was your ${(motivation)}
  - Why did you build this ${(project)}
  - What problem does it ${(solve)}
  - What did you ${(learn)}
  

  ${(questions)}
  - What is your ${(email)}
  - What is your ${(linkedin)}
  - What is your ${(github)}
  
  
  ## Table of Contents
  ${(table)} 


  ## Installation
  ${(installation)}
   
  
  ## Usage
  ${(usage)}


  ${(images)}
      
  
  
  ## Credits
  ${(credits)}
  


  ## Contact Information
  ${(questions)}
  - What is your ${(email)}
  - What is your ${(linkedin)}
  - What is your ${(github)}

  
  ${(license)}
  
  
  `;

inquirer
  .prompt([{
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'Where did you get your motivation from?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is a description of the Project?',
    },
    {
      type: 'input',
      name: 'solve',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add a detailed description of the Project.',
    },
    {
      type: 'input',
      name: 'table',
      message: 'add your table of contents',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain the pratical application of your app/project? Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'images',
      message: 'Enter your images ![alt text](assets/images/screenshot.png)',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List those who need to be credited here including tutorials followed etc.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'list',
      message: 'What is your preferred license type. Press space to submit.',
      name: 'license',
      choices: ['MIT_License', 'GNU_GPLv3', 'Apache_2'],
    },
  ])
  .then((answers) => {
    const readMePageContent = generateReadMe(answers);

    fs.writeFile('READmegen.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created READmegen.md!')
    );
  });