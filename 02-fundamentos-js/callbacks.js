// setTimeout(() => {
//     console.log('Hello world');
// }, 3000)

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Jean',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la base de datos`)
    } else {
        callback(null, usuario);
    }


}

getUsuarioById(1, (err, usuario) => {
    err ? console.log(err) : console.log('Usuario de base de datos usuario', usuario);
});