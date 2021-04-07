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

};

