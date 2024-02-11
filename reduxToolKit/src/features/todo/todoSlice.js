import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
      input: "",
     todos: [{id: 0, text : "  welcome to do app "}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        updateInput: (state, action) => {
            state.input = action.payload
        },
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const id = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.text = state.input;             
            }
            
          },
      
            
    }
})

export const {addTodo, removeTodo, updateTodo, updateInput} = todoSlice.actions

export default todoSlice.reducer