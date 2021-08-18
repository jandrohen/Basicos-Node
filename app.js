const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');



console.clear();

createFile(argv.b, argv.h, argv.l, )
    .then( nameFile => console.log(nameFile.rainbow, 'create'))
    .catch( err => console.log(err))
