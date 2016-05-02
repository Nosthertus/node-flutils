# Flutils
File utilities for nodejs

## Install
`$ npm install flutils --save`

## How to use
```Javascript
#index.js
var file = require('flutils');

var package = file.loadJSON('package.json');

console.log(package.name);
```

**In ternimal**
```sh
$ node index
flutils
```

## Documentation

**loadJSON([*dir|String*])**
Load JSON file and return parsed JSON
- [dir] directory of the JSON file
- **returns** JSON parsed data

- - -

**loadAll([*dir|String*], [*opts|Object*])**
Load All files in a directory
- [dir] directory to load all files
- [opts ***optional***] options for loading files
- **returns** Object with key as name of the file and value as content of the file

- - -

**readDir([*dir|String*], [*opts|Object*])**
Read the contents of a directory
- [dir] directory to read
- [opts ***optional***] options for reading the directory
- **returns** Array with the list of all files

**Opts - Object**
- [type] The extension type of the file

## License
M.I.T