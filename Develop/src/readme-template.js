const fs = require('fs');

const renderLicenseLink = license => {
    if (!license) {
        return ('')
    } else if (license === 'MIT') {
        return `(https://opensource.org/licenses/MIT)`;
    } else if (license === 'Apache 2.0') {
        return `(https://opensource.org/licenses/Apache-2.0)`;
    } else {
        return `(https://www.gnu.org/licenses/gpl-3.0)`;
    }
}

const renderLicenseBadge = license => {
    if (!license) {
        return ('')
      } else if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      } else if (license === 'Apache 2.0') {
        return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      } else {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      }
}

module.exports = templateData => {
    const {title, description, installation, usage, media, license, contribution, tests, link, email  } = templateData;
    const steps = installation.replaceAll(' / ', ' | ')
return `
# ${title}
${renderLicenseBadge(license)}

## Description
${ description }

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${ steps }

## Usage
${ usage }

!(${ media })

## License
This application is licensed under the ${ license } license. Please click on the link below to learn more.

![${renderLicenseLink(license)}]


## Contributing

 ${ contribution }

## Tests

${ tests }

## Questions

Please direct any questions about this project to ${ email }. If you would like to see more projects, visit the GitHub link below.

![GitHub] (https://www.github.com/${ link })
`;
};


