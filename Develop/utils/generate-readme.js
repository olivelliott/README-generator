const fs = require('fs')

const writeFile = fileContent => {
    console.log(fileContent);
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created! Check out the file named [dist]'
            });
        });
    });
}

module.exports = { writeFile }