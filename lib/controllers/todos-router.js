const { Router } = require('express');
const { getAllToDos } = require('../services/todos-service');


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


    })

    .post('/', async (req, res, next) => {
      

    })

    .put('/:id', async (req, res, next) => {


    })

    .delete('/:id', async (req, res, next) => {

    });
