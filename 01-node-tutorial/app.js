const { readFile, writeFile } = require('fs');



const first=''
readFile('./content/first.txt', 'utf8', (err, result) => { 
    if (err) {
        console.log(err);
        return;
    }
    first = result
})


console.log(first);


