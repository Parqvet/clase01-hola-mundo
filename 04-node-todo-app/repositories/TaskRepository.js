const Task = require('../models/Task');

class TaskRepository {

    _tasks = null;
    
    constructor() {
        this._tasks = [];
    }
    
    getAllTask() {

    }

    createTask(title) {
        const task = new Task(title);
        this._tasks.push(task);
    }

    deleTask() {

    }

    completeTask() {

    }
}