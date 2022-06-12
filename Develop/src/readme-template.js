const fs = require('fs');

module.exports = templateData => {
    const {title, installation, usage, media, contribution, tests  } = templateData;
    console.log(templateData);

    return `
        #${title}

        ## Table of Contents
            - [Installation](#installation)
            -[Usage](#usage)
            - [Credits](#credits)
            - [License](#license)

        ## Installation
            - ${ installation }

        ## Usage
        ${ usage }

        !'${ media }'

        ## Contributing

        ${ contribution }

        ## Tests

        ${ tests }

    `;
};

