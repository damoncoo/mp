var mp = require('./../index.js');
mp('ceotest1.mobileprovision')
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    });