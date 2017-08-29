# Install mobileprovision file to Mac OS

## Notice
- Only work on Mac OS
- Async

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
## Return value

### Success
```
{ success: true,
  message: '0f529860-04f4-4ff1-a692-63ee6dffdbb2.mobileprovision add success',
  UUID: '0f529860-04f4-4f**-a692-63ee6dffdbb2',
  TeamIdentifier: '5C8*****SN',
  ExpirationDate: 2017-04-06T00:39:59.000Z,
  TeamName: 'Shanghai Boke Information Technology Co., Ltd.' 
}

```

### Fail

```
{ success: false,
  message: 'Read file ./ceotest1.mobileprovision error. \nDetail: Error: ENOENT: no such file or directory, open \'./ceotest1.mobileprovision\'' 
}

```