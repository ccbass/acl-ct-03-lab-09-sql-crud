const fetch = require('node-fetch');
const { insertToDo, selectAllToDos } = require('../models/todos');


class ToDoService {
    
    static async getAllToDos() {
        const toDos = await selectAllToDos()

        return {details: 'all todos in DB', data: toDos};
    }


}

module.exports = ToDoService