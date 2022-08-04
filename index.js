const fs = require('fs-extra');
const plist = require('plist');

function mp(input) {
    return new Promise(function (resolve, reject) {
        fs.readFile(input, {encoding: 'utf8', flag: 'r'}, (err, data) => {
            if (err) {
                reject({
                    success: false,
                    message: `Read file ${input} error. \nDetail: ${err}`,
                });
                return;
            }
            let mpObj;
            try {
                mpObj = plist.parse(data);

            } catch (e) {
                reject(
                    {
                        success: false,
                        message: `Parse plist error. \n Detail: ${e}`,
                    });
                return;
            }

            const UUID = mpObj.UUID;
            const TeamIdentifier = mpObj.TeamIdentifier[0];
            const ExpirationDate = mpObj.ExpirationDate;
            const TeamName = mpObj.TeamName;

            const root = process.env.HOME;
            const output = `${root}Library/MobileDevice/Provisioning\ Profiles/${UUID}.mobileprovision`;

            fs.copy(input, output, (error) => {
                if (error) {
                    return reject({
                        success: false,
                        message: `Copy from ${input} to ${output} error. \nDetail: ${error}`,
                    })
                };
                resolve({
                    success: true,
                    message: `${UUID}.mobileprovision add success`,
                    UUID,
                    TeamIdentifier,
                    ExpirationDate,
                    TeamName,
                    data:mpObj,
                    installLocation: output,
                });
            });
        });
    });
};
module.exports = mp;
