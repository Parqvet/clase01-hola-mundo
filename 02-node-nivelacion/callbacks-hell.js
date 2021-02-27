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
    callback(`El empleado con id ${id} no existe`);
}

const getSueldoById = (id, callback) => {

    const empleadoSueldo = sueldos.find( empS => empS.id === id );

    if(empleadoSueldo) {
        callback(null, empleadoSueldo);
        return;
    }
    callback(`El sueldo con ${id} no existe`);
}

const id = 5;


getEmpleadoById(id, (error, empleado) => {

    if(error) {
        console.log('ERROR!');
        console.log(error);
        return;
    }

    getSueldoById(id, (error, sueldo) => {

        if(error) {
            console.log('ERROR!');
            console.log(error);
            return;
        }

        console.log(`El empleado ${empleado.name} tiene un sueldo de ${sueldo.sueldo}`);
    });
    
})