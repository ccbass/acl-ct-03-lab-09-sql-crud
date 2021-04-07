const fetch = require('node-fetch');
const { selectAllToDos, selectOneToDo, insertOneToDo, updateOneToDo } = require('../models/todos');


class ToDoService {
    
    static async getAllToDos() {
        const toDos = await selectAllToDos()

        return {details: 'all todos in DB', data: toDos};
    }

    static async getOneToDo({id}) {
        const toDo = await selectOneToDo(id)

        return {details: 'single todo', data: toDo};
    }
    
    static async createNewToDo({ title, description, project, dueDate }) {
        const toDo = await insertOneToDo(title, description, project, dueDate)

        return {details: 'new todo created', data: toDo};
    }
    
    static async updateToDo({ id }, { title, description, project, dueDate }) {
        const toDo = await updateOneToDo(id, title, description, project, dueDate)

        return {details: 'updated todo', data: toDo};
    }

}

module.exports = ToDoService