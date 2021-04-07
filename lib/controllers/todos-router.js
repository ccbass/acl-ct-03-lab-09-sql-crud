const { Router } = require('express');
const { getAllToDos, getOneToDo } = require('../services/todos-service');


module.exports = Router()

    .get('/', async (req, res, next) => {
        try {
            const allTodos = await getAllToDos()
            res.send(allTodos)
            
        } catch (error) {
            res.send(error)
        }
    })
    
    .get('/:id', async (req, res, next) => {
        try {
            const oneToDo = await getOneToDo(req.params)
            res.send(oneToDo)
    
        } catch (error) {
            res.send(error)
        }
    })

    .post('/', async (req, res, next) => {
      

    })

    .put('/:id', async (req, res, next) => {


    })

    .delete('/:id', async (req, res, next) => {

    });
