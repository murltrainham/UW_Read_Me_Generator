/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

// https://zoom.us/rec/play/ondsNOWWASZLAl8g-DAiseoaS3d6HOC7Ew93yM6Ilo-1hfl76xmqqlK1NMsvfd7OVFreuu2SXcS7faU3.kNbhfcmo0aW_NAn7 - Anthony Brown @ zoom class office hours recording - Node.js Day 3
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba - lukas-h @ GitHub Gist - Collection of License badges for your Project's README file.
// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts - joshtronic @ DigitalOcean tutorial

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

const fs = require("fs");

const inquirer = require("inquirer");

const generateMd = ({ PJN, PJD, PJUs, PJT, PJU, PJE, PJI, PJC, PJL }) =>
  `
# ${PJN}
## Description 
${PJD}
## Table of Contents
-[Installation](#installation)

-[Usage](#usage)

-[Test](#test)

-[Contributing](#contributing)

-[Questions](#questions)

## Installation
${PJI}
## Usage
${PJUs}
## Test
${PJT}
## Contributing Guidelines
${PJC}
## Questions
[GitHub Profile](https://github.com/${PJU})

Email me at: ${PJE}

## License
${PJL}
`;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your projects name?",
      name: "PJN",
    },
    {
      type: "input",
      message: "Please enter a description of your project.",
      name: "PJD",
    },
    {
      type: "input",
      message: "Please provide instructions and examples for use.",
      name: "PJUs",
    },
    {
      type: "input",
      message: "Please provide install instructions to the user.",
      name: "PJI",
    },
    {
      type: "input",
      message: "What command should be run to initalize a test?",
      name: "PJT",
    },
    {
      type: "input",
      message:
        "Please provide infromation for contributing to this repository.",
      name: "PJC",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "PJU",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "PJU",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "PJE",
    },
    {
        type: "expand",
        message: "What license do you want to include?",
        name: "PJL",
        choices: [
            {
                key:"m",
                value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                name:"MIT",
            },
            {
                key:"a",
                value:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                name:"Apache 2.0",
            }
        ]
      },
  ])

  .then((response) => {
    const markdownContent = generateMd(response);
    fs.writeFile("markdown_output.md", markdownContent, (err) =>
      err
        ? console.log(err)
        : console.log("markdown_output.md sucessfully generated!!")
    );
  });
