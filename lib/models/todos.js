const pool = require('../utils/pool');

module.exports = class ToDo {
  id;
  title;
  description;
  projectGroup;
  dueDate;

  constructor(row) {
    this.id = row.todo_id;
    this.title = row.title;
    this.description = row.description;
    this.projectGroup = row.project_group;
    this.dueDate = row.due_date;
  }

  static async selectAllToDos() {
    const {
      rows,
    } = await pool.query(
      `SELECT * FROM todos`
    );

    return rows.map(row => new ToDo(row));
  }
  static async selectOneToDo(id) {
    const {
      rows,
    } = await pool.query(
      `SELECT * FROM todos WHERE todo_id=$1`,
      [id]
    );

    return new ToDo(rows[0]);
  }

  static async insertOneToDo(title, description, project, dueDate) {
    const {
      rows,
    } = await pool.query(
      `INSERT INTO todos(title, description, project_group, due_date)
        VALUES ($1, $2, $3, $4)
          RETURNING *`,
      [title, description, project, dueDate]
    );

    return new ToDo(rows[0]);
  }

  static async updateOneToDo(id, title, description, project, dueDate) {
    const {
      rows,
    } = await pool.query(
      `UPDATE todos SET title=$1, description=$2, project_group=$3, due_date=$4
        WHERE todo_id=$5
          RETURNING *`,
      [title, description, project, dueDate, id]
    );

    return new ToDo(rows[0]);
  }

  static async deleteOneToDo(id) {
    const {
      rows,
    } = await pool.query(
      `DELETE FROM todos
        WHERE todo_id=$1
          RETURNING *`,
      [id]
    );

    return new ToDo(rows[0]);
  }


};

