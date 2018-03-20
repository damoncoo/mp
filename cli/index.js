#! /usr/bin/env node

var mp = require('../index.js');
var mpRemove = require('../src/remove.js');
var userArgs = process.argv.slice(2);

var command = userArgs[0];

switch (command){
    case 'install':
        var filePath = userArgs[1];
        install();
        break;
    case 'remove':
        var uuid = userArgs[1];
        remove();
        break;
    default:
        console.log('Error command');
}
function install() {
    try{
        mp(filePath)
            .then(function (value) {
                console.log(value.UUID);
            })
            .catch(function (error) {
                // console.log(error);
            });
    }catch (e){
        console.log("Catch error: ",e)
    }

}

function remove() {
    try{
        mpRemove(uuid)
            .then(function (value) {
                console.log(value);
            })
    }catch (e){
        console.log("Catch error: ",e)
    }

}