import React, { useState } from "react";
import { TodoApp } from "../components/TodoApp";
import { TodoProvider } from "../context/TodoContext";

export const TodoScreen = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};
