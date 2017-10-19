package coreapi.todo;

import javax.persistence.*;

@Entity
@Table
public class Todo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String title;
	private boolean completed;

	protected Todo() {
	}

	public Todo(long id, String title) {
		this.id = id;
		this.title = title;
		this.completed = false;
	}

	public long getId() {
		return this.id;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTitle() {
		return this.title;
	}

	public void setCompleted(boolean status) {
		this.completed = status;
	}

	public boolean getCompleted() {
		return this.completed;
	}
}