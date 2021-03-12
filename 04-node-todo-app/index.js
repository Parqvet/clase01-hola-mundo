const { inquirerMenu, inquirerInput } = require('./helpers/inquirer');
const TaskRepository = require('./repositories/TaskRepository');

const main = async () => {

    const taskRepository = new TaskRepository();
    let option = '';

    do {
        option = await inquirerMenu();

        switch (option) {
            case 1:
    
                console.log('El usuario selecciono la opcion de crear tarea');
                const title = await inquirerInput('Task Title');
                taskRepository.createTask(title);
                break;
            
            case 2:
    
                const allTasks = taskRepository.getAllTask();
                console.log(allTasks);
                break;
        }

    } while (option !== 0);

}

main();