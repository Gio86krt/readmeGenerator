// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") return "";
  license = license.replace(/ /g, "%20");
  const badge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;

  // return `![${badge}](${link})`;
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") return "";
  license = license.replace(/ /g, "%20");
  const link = `https://choosealicense.com/licenses/?q=${license}/`;

  return `[License link](${link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") return "";
  const licenseSection = `
  #### License:
  This product is licensed under the ${license}.`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
## ${data.filename}
  
  ${renderLicenseBadge(data.license)}<br>
  ${renderLicenseLink(data.license)}<br>

### Description

  ${data.description}

### Table of contents:

  - [License](#license)

  - [Installation](#install)

  - [Usage](#usage)

  - [Test](#tests)
  
  - [Contribution](#contributions)

  - [Contacts](#contacts)


${renderLicenseSection(data.license)}<br>

#### Installation:
  To install the necessary dependencies use the following command:

  ${data.install}

#### Usage:

  Special instruction for usage:
  ${data.usage}

#### Test:

  To run tests on this project run the following command: <br>
  ${data.tests}

####  Contributions:
  
  Thank you for the cooperation to:<br>
  ${data.contribution}

#### Contacts:

  For questions and collaborations contact me at: [${data.email}](mailto:${
    data.email
  });
  Or check my [GitHub](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
