# Install mobileprovision file to Mac OS

## Notice
- Only work on Mac OS
- Sync

## Usage

```sh
$ npm install mobileprovision --save
```

```sh
var mp = require('mobileprovision');
mp('PATH-TO-YOUT-MOBILEPROVISION-FILE')
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    });
```