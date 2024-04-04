import React from 'react'
import TodoItem from '../models/TodoItem'
import './Todo.css'
import { DeleteRounded, Edit } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/todosSlice'
import { AppDispatch } from '../store/store'

interface SingleTodoProps {
  todo: TodoItem
}

const SingleTodo: React.FC<SingleTodoProps> = ({todo}) => {
  const {id, title, description, completed} = todo;

  const dispatch = useDispatch<AppDispatch>()

  const handleDelete = () => {
    dispatch(deleteTodo({id}))
  }

  // const handleUpdate = () => {
  //   dispatch(updateTodo({
  //     id: id,
  //     title: title,

  //   }))
  // }

  return (
    <div className="to-do-list">
        <p>{title}</p>
        <p>{description}</p>
        <p>{completed || completed === undefined ? 'X': '✔'}</p>
        <Edit />
        <DeleteRounded onClick={handleDelete}/>
    </div>
  )
}

export default SingleTodo