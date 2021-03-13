const { inquirerMenu, inquirerInput } = require('./helpers/inquirer');
const { getAllTask, createTask } = require('./services/fileService');
// const TaskRepository = require('./repositories/TaskRepository');

const main = async () => {

    // const taskRepository = new TaskRepository();
    let option = '';

    do {
        option = await inquirerMenu();

        switch (option) {
            case 1:
    
                console.log('El usuario selecciono la opcion de crear tarea');
                const title = await inquirerInput('Task Title');
                createTask(title);
                break;
            
            case 2:
    
                const allTasks = getAllTask();
                console.log(allTasks);
                break;
        }

    } while (option !== 0);

}

main();