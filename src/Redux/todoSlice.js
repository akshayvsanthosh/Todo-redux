import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    id: 1, 
  };
  

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todoList.push({ id: state.id,...action.payload });
            state.id ++;      
        },
        removeToDo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const todo = state.todoList.find((todo) => todo.id == action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
        },
      
    }
})


export const {addTodo,removeToDo, toggleComplete } = todoSlice.actions
export default todoSlice.reducer