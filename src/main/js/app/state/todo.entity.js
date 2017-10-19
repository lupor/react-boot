export class Todo {
  constructor(id = Date.now(), title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  setId(id) {
    this.id = id;
  }
}
