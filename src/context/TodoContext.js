import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext(null);

export const TodoActions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const initialState = [
  {
    id: Date.now(),
    content: "Hello World",
    done: false,
  },
];

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TodoActions.ADD_TODO: {
      const newTodo = { id: Date.now(), done: false, content: payload };
      return [...state, newTodo];
    }
    case TodoActions.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, done: !todo.done } : todo
      );
    case TodoActions.EDIT_TODO:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, content: payload.content } : todo
      );
    case TodoActions.DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
