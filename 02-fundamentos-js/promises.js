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
        nombre: 'Chupalito'
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

const getEmpleado = id => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id);
        !empleadoDB ? reject(`No existe un empleado con el id ${id}`) : resolve(empleadoDB);
    });
};

getEmpleado(3).then(empleado => {
    console.log('Empleado de DB ', empleado);
}, err => {
    console.log(err);
});