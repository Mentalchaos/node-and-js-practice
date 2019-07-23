const empleados = [{
    id: 1,
    nombre: 'Jim Raynor'
},
{
    id: 2,
    nombre: 'Fenix'
},
{
    id: 3,
    nombre: 'Zeratul'
}];

const salarios = [{
    id: 1,
    salario: 3000
},
{
    id: 2,
    salario: 2000
}];

const getSalario = empleado => {
    return new Promise((resolve,reject) => {
        const money = salarios.find(salario => salario.id === empleado);
        
        if(!money){
            reject(console.log(`No existe un salario con id ${empleado}`))
        } else {
            resolve({
                nombre: empleados[empleado].nombre,
                salario: money.salario
            });
        }
    });
};

const getEmpleado = id => {
    return new Promise ( (resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id);
        empleadoDB ? resolve(empleadoDB) : reject(`No existe un empleado con el id ${id}`);
    })
}

getEmpleado(4).then(empleado => {
    console.log('empleado', empleado);
}, err => {
    console.log(err)
});

getSalario(2).then(salario => {
    console.log(`Salario de ${salario.nombre} es de ${salario.salario}`);
}, err => {
    console.log(err);
});