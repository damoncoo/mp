const fs = require('fs-extra');

function remove(uuid) {

    const reg = new RegExp("(\/Users\/.*?\/).*");
    const root = __dirname.match(reg)[1];
    const filePath = `${root}Library/MobileDevice/Provisioning\ Profiles/${uuid}.mobileprovision`;


    return new Promise(function (resolve, reject) {
        fs.remove(filePath, (error) => {
            if (error) {
                return reject({
                    success: false,
                    message: `Copy from ${input} to ${output} error. \nDetail: ${error}`,
                })
            };
            resolve({
                success: true,
            });
        });
    })


}

module.exports = remove;