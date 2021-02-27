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

const getEmpleadoById = async (id) => {
    try {
        const empleado = empleados.find( e => e.id === id );
    
        if(empleado) {
            return empleado;
        }
        // como find no lanza un error, en el caso de que el empleado no exista, se lo tenemos que agregar
        throw new Error(`El empleado con id ${id} no existe`);
    } catch (error) { 
        throw error;
    }
}

const getSueldoById = async (id) => {
    try {
        const sueldo = sueldos.find( s => s.id === id );
        if(sueldo) {
            return sueldo;
        }
        throw new Error(`El sueldo con id ${id} no existe`);
    } catch (error) { 
        throw error;
    }
}

const id = 1;

const getDatosCompletosEmpleado = async (id) => {
    try {
        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        // return `El empleado con id ${id} ${empleado.name} tiene un sueldo de ${sueldo.sueldo}`;
        return {
            id,
            nombre: empleado.name,
            sueldo: sueldo.sueldo
        }

    } catch (err) {
        throw err;
    }

}

getDatosCompletosEmpleado(id)
    .then( data => console.log(`El empleado con id ${data.id} ${data.nombre} tiene un sueldo de ${data.sueldo}`))
    .catch( err => console.log(err.message));