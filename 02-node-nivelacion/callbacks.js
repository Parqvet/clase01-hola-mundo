/* setTimeout(() => {
    console.log('Hola mundo!');
}, 2000); */

/* const saludar = () => {
    console.log('Hola mundo!');
}

setTimeout(saludar, 2000); */

const getUserById = (id, callback) => {

    const user = {
        id,
        nombre: 'Marce'
    }

    setTimeout(() => {
        
        callback(user);
        
    }, 1000);
}

const imprimirUser = (user) => {
    console.log(user.nombre);
}

getUserById(10, imprimirUser);