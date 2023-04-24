let archContraloria = require("./controllers/contraloria");
const fs = require("fs")

archContraloria.contraloria()
    .then(dta => {
        console.log("Contraloria cargado correctamente")

        const header = 'columna1,columna2,columna3\n'; // encabezado del archivo CSV
        const rows = dta.map(row => row.join(',')); // convertir cada registro en una cadena separada por comas

        const csv = header + rows.join('\n'); // unir todo en un solo archivo CSV

        fs.writeFileSync("Archivos/Resultados/contraloria.csv", csv, function (err) {
            if (err) throw err;
            console.log('Archivo creado exitosamente!');
        });
        console.log("Archivo contraloria generado en la carpeta 'Resultados'")

    })
    .catch(err => {
        console.error('Ocurrió un error al leer el archivo:', err);
    });

    setTimeout(function() {
        
    }, 5000)
