"use strict";
exports.__esModule = true;
var fs = require("fs");
var twoDigits = /^.*\d\d\d\d$/;
var oneDigit = /^.*\d\d$/;
var folderName = process.argv[2];
var folder = fs.readdirSync(folderName);
folder.forEach(function (fileString) {
    var file = fileString.split('.');
    if (twoDigits.test(file[0])) {
        file[0] = file[0].slice(0, -2);
    }
    else if (oneDigit.test(file[0])) {
        file[0] = file[0].slice(0, -1);
    }
    var newFilename = file.join('.');
    fs.renameSync(folderName + fileString, folderName + newFilename);
});
