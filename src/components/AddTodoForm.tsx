import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { AppDispatch } from "../store/store";

interface FormDataProps {
  title: string;
  description: string;
}

const AddTodoForm = () => {
  const initialState: FormDataProps = {
    title: "",
    description: "",
  };

  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<FormDataProps>(initialState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(addTodo(formData));
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        id="description"
        cols={30}
        rows={10}
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTodoForm;
