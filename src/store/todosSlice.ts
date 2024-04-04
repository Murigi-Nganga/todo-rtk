import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TodoItem from '../models/TodoItem';

const initialState: TodoItem[] = [];

interface AddTodoPayload {
    title: string,
    description: string,
}

interface UpdateTodoPayload {
    id: number,
    title: string | undefined,
    description: string | undefined,
    completed: boolean | undefined,
}

interface DeleteTodoPayload {
    id: number;
}

export const todosSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
            const {title, description} = action.payload;

            const newTodo: TodoItem = {
                id: state.length + 1,
                title: title,
                description: description,
                completed: false,
            };
            return [...state, newTodo];
        },
        updateTodo: (state, action: PayloadAction<UpdateTodoPayload>) => {
            const { id, title, description, completed } = action.payload;

            return state.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: title !== undefined ? title : todo.title,
                        description: description !== undefined ? description : todo.description,
                        completed: completed !== undefined ? completed : todo.completed
                    };
                }
                return todo;
            });
        },
        deleteTodo: (state, action: PayloadAction<DeleteTodoPayload>) => {
            const { id } = action.payload;

            return state.filter((todo) => todo.id !== id)
        },
    }
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer