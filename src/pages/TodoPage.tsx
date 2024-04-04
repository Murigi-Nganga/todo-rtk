import TodoList from "../components/TodoList"
import AddTodoForm from "../components/AddTodoForm";
import { selectTodos } from "../store/todoSelectors";
import { useSelector } from "react-redux";
import TodoItem from "../models/TodoItem";

const TodoPage = () => {

  const todos: TodoItem[] = useSelector(selectTodos);

  return (
    <div>
        <AddTodoForm />
        <TodoList todoList={todos} />
    </div>
  )
}

export default TodoPage