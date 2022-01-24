import * as fs from 'fs'

const twoDigits = /^.*\d\d\d\d$/;
const oneDigit = /^.*\d\d$/;
const folderName = process.argv[2]
const folder = fs.readdirSync(folderName)

folder.forEach(fileString => {
    const file = fileString.split('.')
    if ( twoDigits.test(file[0]) ){
        file[0] = file[0].slice(0,-2)
    } else if ( oneDigit.test(file[0]) ) {
        file[0] = file[0].slice(0,-1)
    }
    const newFilename = file.join('.')
    fs.renameSync(folderName + fileString, folderName + newFilename)
})