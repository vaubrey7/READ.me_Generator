const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = ({ github, linkedin, email, questions, MIT_License, GNU_GPLv3, Apache_2  }) =>
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

  
  ${(MIT_License)} ${(GNU_GPLv3)} ${(Apache_2)}
  
  
  `;

inquirer
  .prompt([
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

    fs.writeFile('READ.me', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created READ.me!')
    );
  });

