const personaje = {
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    getDescription() {
        return `${nombre} ${apellido} es ${profesion}`
    }
}

// const { nombre, apellido, profesion } = personaje;

const imprimirPersonaje = ({ nombre, apellido, profesion, edad = 50 }) => {
    console.log(nombre, apellido, profesion);
}

imprimirPersonaje(personaje)