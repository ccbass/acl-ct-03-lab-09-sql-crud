const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('sql-crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET: returns all todos in DB', async () => {
    const allTodos = await request(app)
      .get('/api/todos/')

    expect(allTodos.body).toEqual({
      data: expect.any(Array),
      details: 'all todos in DB'
    })
    
    expect(allTodos.body.data.length).toEqual(4)

  })

  it('GET: returns one todo by id', async () => {
    const oneToDo = await request(app)
      .get('/api/todos/2')

    expect(oneToDo.body).toEqual({
      data: expect.any(Object),
      details: 'single todo'
    })

  })

  it('POST: creates a new todo and returns it', async () => {
    const newToDo = await request(app)
      .post('/api/todos/')
      .send({
        title: 'new title',
        description: 'new description',
        project: 'new project',
        dueDate: '2021-05-01'
      })

    expect(newToDo.body).toEqual({
      data: {
        id: 5,
        title: 'new title',
        description: 'new description',
        projectGroup: 'new project',
        dueDate: expect.any(String)
      },
      details: 'new todo created'
    })

  })


});
