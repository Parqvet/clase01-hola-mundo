const fs = require('fs');
const { logica } = require('./logica');

const multiplicar = (base) => {
    console.log(`***** Tabla del ${base} *****`);

    const resultado = logica(base);

    console.log(resultado);
    const nombreArchivo = `tabla-del-${base}.txt`;
    fs.writeFile(`03-bases-nodejs/tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado!`);
      });
}

module.exports = {
    multiplicar
}