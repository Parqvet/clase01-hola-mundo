const empleados = [
    {
        id: 1,
        name: 'Juan'
    },
    {
        id: 2,
        name: 'Marta'
    },
    {
        id: 3,
        name: 'Luis'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    }
]

const getEmpleadoById = (id, callback) => {

    const empleado = empleados.find( e => e.id === id );

    if(empleado) {
        callback(null, empleado);
        return;
    }
    callback(new Error('El empleado no existe'));
}

const id = 1;

const getSueldoById = (id, callback) => {

    const empleadoSueldo = sueldos.find( emp => emp.id === id );

    if(empleadoSueldo) {
        callback(null, empleadoSueldo);
        return;
    }

}

getEmpleadoById(id, (error, empleado) => {

    if(error) {
        console.log('ERROR!');
        console.log(error);
        return;
    }
    
    console.log(`El empleado: ${empleado.name}...`);
})