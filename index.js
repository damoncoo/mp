'use strict';
var fs = require('fs-extra');
module.exports = mp;
function mp(input){
    return new Promise(function (resolve, reject) {
        fs.readFile(input,{encoding:'utf8',flag:'r'}, (err,data) => {
            if(err) reject(err);
            var reg = new RegExp("<key>UUID<\/key>[\\s]*<string>(.*)<\/string>");
            var uuid = data.match(reg)[1];
            var reg = new RegExp("(\/Users\/.*?\/).*");
            var root = __dirname.match(reg)[1];
            var output=`${root}Library/MobileDevice/Provisioning\ Profiles/${uuid}.mobileprovision`;
            fs.copy(input, output, (err) => {
                if (err) return reject(err);
                resolve(`${uuid}.mobileprovision add success`);
            });
        });
    });
};


