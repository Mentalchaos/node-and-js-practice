const empleados = [{
        id: 1,
        nombre: 'Jean'
    },
    {
        id: 2,
        nombre: 'Georg'
    },
    {
        id: 3,
        nombre: 'Fabitoman'
    }
];

const salarios = [{
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getSalario = (id, callback) => {
    const money = salarios.find(salario => salario.id === id);

    !money ? console.log(`No existe un salario con id ${id}`) : callback(null, money);
}

const getEmpleado = (id, callback) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);
    !empleadoDB ? callback(`No existe un empleado con el id ${id}`) : callback(null, empleadoDB);
}

const hasError = (err) => {
    if (err) return console.log(err);
}

getEmpleado(3, (err, empleado) => {
    hasError(err)
    getSalario(empleado.id, (err, salario) => {
        err ? console.log(err) : console.log(`El salario del usuario ${empleado.nombre} es ${salario.salario}`);
    });
});