package coreapi.todo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class TodoController {

    @RequestMapping("/todo")
    public String index() {
        return "this is the first todo route";
    }
}
