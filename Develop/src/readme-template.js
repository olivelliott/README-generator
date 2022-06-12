const fs = require('fs');

module.exports = templateData => {
    const {title, installation, usage, media, license, contribution, tests, link, email  } = templateData;
    console.log(templateData);

    return `
    #${title}

    ## Table of Contents
        - [Installation](#installation)
        -[Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

    ## Installation
     ${ installation }

    ## Usage
    ${ usage }

    !'${ media }'

    ## License
    This application is covered under the ${ license } license.


    ## Contributing

    ${ contribution }

    ## Tests

    ${ tests }

    ## Questions

    If you have any questions, please refer to my contact information at !${ link }

    You are also welcome to contact me via email at ${ email }



    `;
};

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License
//   that explains which license the application is covered under

