const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, hasta = 10, listar = false ) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${i*base}\n`;
            consola += `${base} ${'x' .america} ${i} ${'x' .trap} ${i*base}\n`;
        }

        if (listar) {
            console.log('==========='.green)
            console.log('tabla del:'.red, colors.blue(base) );
            console.log('==========='.green)
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`
    }
    catch (e) {
        throw e
    }

}

module.exports = {
    createFile
}
