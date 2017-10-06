package coreapi.todo;

import coreapi.todo.TodoStatus;

public class Todo {
	public final long id;
	public final String title;
	public final String description;
	public TodoStatus status;

	public Todo(long id, String title, String description){
		this.id = id;
		this.title = title;
		this.description = description;
		this.status = TodoStatus.OPEN;
	}

	public void ToggleStatus() {
		this.status = 
			(this.status == TodoStatus.OPEN) ? TodoStatus.DONE : TodoStatus.OPEN;
	}
}