import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import TodoItem from '../models/TodoItem'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoItem[], void>({
      query: () => 'todos',
    }),
    getTodoById: builder.query<TodoItem, number>({
      query: (id) => `todos/${id}`,
    }),
  }),
});

//? These hooks are automatically created/generated by the builder.query method
export const { useGetTodosQuery, useGetTodoByIdQuery } = todoApi;