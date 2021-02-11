// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") return "";

  const badge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;

  // return `![${badge}](${link})`;
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license==="") return "";

//   const link = `https://choosealicense.com/licenses/${license}/`;

//   return `[License link](${link})`
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license==="") return "";

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.filename}
  
  ${renderLicenseBadge(data.license)}

### Description

  ${data.description}

### Table of contents:

  - [License](#license)

  - [Installation](#install)

  - [Usage](#usage)

  - [Test](#tests)
  
  - [Contribution](#contributions)

  - [Contacts](#contacts)


#### License:
  This product is licensed under the ${data.license}.

#### Installation:
  To install the necessary dependencies use the following command:

  ${data.install}

#### Usage:

  Special instruction for usage:
  ${data.usage}

#### Test:

  To run tests on this project run the following command:
  ${data.tests}

####  Contributions:
  
  Thank you for the cooperation to:
  ${data.contribution}

#### Contacts:

  For questions and collaborations contact me at: [${data.email}](mailto:${
    data.email
  });
  Or check my [GitHub](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
