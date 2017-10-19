export class Task {
  constructor(title) {
    this.title = title;
  }
}

export class Todo {
  constructor(task, completed = false, assignee = null) {
    this.task = task;
    this.completed = completed;
    this.assignee = assignee;
    this.id = Date.now();
  }
}
