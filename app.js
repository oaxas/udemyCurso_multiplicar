const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {
    crearArchivo,
    listar
} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        console.log(colors.green('================='));
        console.log(colors.green('==== TABLA ======'));
        console.log(colors.green('================='));

        listar(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));

        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${colors.green(archivo)}`);
            })
            .catch(err => console.log(err));

        break;
    default:
        console.log('comando no reconocido');
}