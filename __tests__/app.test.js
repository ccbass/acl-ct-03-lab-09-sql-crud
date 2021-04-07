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


});
