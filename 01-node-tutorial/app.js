const path = require('path');


const pathFile = path.join(__dirname, 'content', 'subfolder', 'test.txt');


console.log(pathFile);
console.log(path.basename(pathFile));



const absolute = path.resolve
(__dirname, 'content', 'subfolder', 'test.txt');