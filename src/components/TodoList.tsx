import TodoItem from "../models/TodoItem"
import SingleTodo from "./SingleTodo"


interface TodoListProps {
    todoList: TodoItem[]
}

const TodoList: React.FC<TodoListProps> = ({todoList}) => {
  return (
    <div>
        <ul>
        {todoList.map((todoItem: TodoItem) => 
            <li key={todoItem.id}>
                <SingleTodo todo={todoItem} />
            </li>
        )}
        </ul>
    </div>
  )
}

export default TodoList