// En file.js
const fs = require('fs');

function contraloria() {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream('Archivos/dta.csv', { encoding: 'utf8' });
    let dta = [];

    readStream.on('data', chunk => {
      const lines = chunk.split('\n');
      lines.forEach(line => {
        line = line.split(';');
        dta.push(line);
      });
    });

    readStream.on('end', () => {
      resolve(dta);
    });

    readStream.on('error', err => {
      reject(err);
    });
  });

}

module.exports = {
  contraloria
};