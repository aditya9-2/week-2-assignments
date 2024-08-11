// Promisified Version of fs.readFileSync

const fs = require('fs');

function PromisifiedreadFile(file, encoding = 'utf-8') {

    return new Promise((resolve, reject) => {

        function callbackfn(err, data) {

            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }

        };

        fs.readFile(file, encoding, callbackfn);
    });

};

PromisifiedreadFile('a.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err))
