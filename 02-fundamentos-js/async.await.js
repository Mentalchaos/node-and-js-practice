// let getNombre = async() => {
//     return 'Jean Pierre';
// };


// const data = getNombre().then( nombre => {
//     console.log(nombre);
// }).catch(e => {
//     console.log(e);
// });

let getNombre = () => {
    return new Promise ( (resolve,reject) => {
        setTimeout( () => {
            resolve('Jean Pierre');            
        }, 3000);
    });
};

let saludo = async() => {
    let nombre = await getNombre() 
    return `Hola ${nombre}`
}

saludo().then( mensaje => {
    console.log(mensaje);
});