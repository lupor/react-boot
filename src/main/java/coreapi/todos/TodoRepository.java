package coreapi.todos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long> {

	List<Todo> findByTitle(String title);
}