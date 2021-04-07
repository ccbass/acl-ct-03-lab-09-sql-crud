const fetch = require('node-fetch');
const { selectAllToDos, selectOneToDo } = require('../models/todos');


class ToDoService {
    
    static async getAllToDos() {
        const toDos = await selectAllToDos()

        return {details: 'all todos in DB', data: toDos};
    }

    static async getOneToDo({id}) {
        const toDo = await selectOneToDo(id)

        return {details: 'single todo', data: toDo};
    }


}

module.exports = ToDoService