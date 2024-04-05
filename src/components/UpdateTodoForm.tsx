import TodoItem from "../models/TodoItem"

interface UpdateFormProps {
    todoItem: TodoItem
}

const UpdateTodoForm: React.FC<UpdateFormProps> = ({ todoItem }) => {


  return (
    <div>
        <input type="text" name="title" id="title" value={todoItem.title}/>
        <textarea name="description" id="" cols={30} rows={10} value={todoItem.description}/>
        <input type="checkbox" name="is-completed" id="is-completed" />
    </div>
  )
}

export default UpdateTodoForm