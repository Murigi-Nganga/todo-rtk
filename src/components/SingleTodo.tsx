import React, { useState } from "react";
import TodoItem from "../models/TodoItem";
import "./Todo.css";
import { DeleteRounded, Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todosSlice";
import { AppDispatch } from "../store/store";
import UpdateDialog from "./UpdateDialog";

interface SingleTodoProps {
  todo: TodoItem;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo }) => {
  const { id, title, description, completed } = todo;

  const dispatch = useDispatch<AppDispatch>();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdate = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <UpdateDialog modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} todo={todo}/>
      <div className="to-do-list">
        <p>{title}</p>
        <p>{description}</p>
        <p>{completed ? "✔" : "X"}</p>
        <Edit onClick={handleUpdate} />
        <DeleteRounded onClick={handleDelete} />
      </div>
    </>
  );
};

export default SingleTodo;
