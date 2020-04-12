const fs = require('fs');


let getTablaMultiplicar = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor base introducido (${base}) no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`el valor limite introducido (${limite}) no es un numero`);
            return;
        }

        let data = ""
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }


        return resolve(data);
    });

}


let listar = (base, limite) => {
    return getTablaMultiplicar(base, limite)
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        getTablaMultiplicar(base, limite)
            .then(tabla => {

                fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {

                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve(`tablas/tabla-${base}.txt`);
                });
            })
            .catch(err => reject(err));
    });
}



module.exports = {
    crearArchivo,
    listar
};