// Promisified Version of fetch();
async function promisifiedFetch(url) {

    return new Promise((resolve, reject) => {

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(`ERR: ${response.status}`)
                } else {
                    return response.json();
                }
            })
            .then(data => resolve(data))
            .catch(err => reject(err));

    });

};

promisifiedFetch('https://api.github.com/users/aditya9-2')
    .then(data => console.log(data))
    .catch(err => console.log(err));

