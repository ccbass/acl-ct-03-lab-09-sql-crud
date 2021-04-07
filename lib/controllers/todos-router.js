const { Router } = require('express');
const { getAllToDos, getOneToDo, createNewToDo, updateToDo } = require('../services/todos-service');


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
        try {
            const newToDo = await createNewToDo(req.body)
            res.send(newToDo)
        
        } catch (error) {
            res.send(error)
        }
        
    })
    
    .put('/:id', async (req, res, next) => {
        try {
            const updated = await updateToDo(req.params, req.body)
            res.send(updated)
        
        } catch (error) {
            res.send(error)
        }
        

    })

    .delete('/:id', async (req, res, next) => {

    });
