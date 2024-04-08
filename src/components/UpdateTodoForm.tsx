import { useDispatch } from "react-redux";
import TodoItem from "../models/TodoItem";
import { ChangeEvent, useState } from "react";
import { updateTodo } from "../store/todosSlice";

interface UpdateFormProps {
  todoItem: TodoItem;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateTodoForm: React.FC<UpdateFormProps> = ({
  todoItem,
  setModalIsOpen,
}) => {
  interface FormData {
    title: string;
    description: string;
    completed: boolean;
  }

  const initialState: FormData = {
    title: todoItem.title,
    description: todoItem.description,
    completed: todoItem.completed!,
  };

  const dispatch = useDispatch();

  const handleUpdate = () => {
    setModalIsOpen(false);
    dispatch(updateTodo({ id: todoItem.id, ...formData }));
  };

  const [formData, setFormData] = useState<FormData>(initialState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxToggle = () => {
    setFormData({
      ...formData,
      completed: !formData.completed,
    });
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        id=""
        cols={30}
        rows={10}
        value={formData.description}
        onChange={handleInputChange}
      ></textarea>
      <input
        type="checkbox"
        name="is-completed"
        id="is-completed"
        checked={formData.completed}
        onChange={handleCheckboxToggle}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateTodoForm;
