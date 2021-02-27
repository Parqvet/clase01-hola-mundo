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

const getEmpleadoById = (id) => {

    return new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id );
    
        if(empleado) {
            resolve(empleado);
            return;
        }
        reject(`El empleado con id ${id} no existe`);

    });

}

const getSueldoById = (id) => {

    return new Promise(( resolve, reject ) => {

        const sueldo = sueldos.find( s => s.id === id );
    
        if(sueldo) {
            resolve(sueldo);
            return;
        }
        reject(`El empleado con id ${id} no existe`);

    });

}

const id = 1;

// esta funcion devuelve una promesa
getEmpleadoById(id)
    // resolvemos con el empleado
    .then( empleado => { 
        nombre = empleado.name;
        // al resolverse, retornamos con la funcion del sueldo
        return getSueldoById(id);

    })
    // entonces al devolver una promesa, tenemos el metodo then
    // el cual resuelve el sueldo
    .then( sueldo => {

        console.log(`El empleado con id ${id} ${nombre} tiene un sueldo de ${sueldo.sueldo}`);

    })
    // y el catch va a funcionar para los dos
    .catch( err => console.log(err));
