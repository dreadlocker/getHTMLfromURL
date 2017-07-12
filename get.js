require('isomorphic-fetch');
// node .\get.js > aaa.html     v terminala na VScode

parseTvData = (url) => {
    return fetch(url)
        .then((responce) => {
            if (!responce.ok) {
                throw new Error('Invalid url');
            }

            return responce.text()
        })
        .then((html) => {
            console.log(html);
        });
};

parseTvData('http://www.argos.co.uk/product/3550447');