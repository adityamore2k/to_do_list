import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import { ThemeProvider } from "@mui/material";
import useTodoState from "./useTodoState";

export default function Todos() {
  const {
    todos,
    addTodo,
    toggleCompleted,
    toggleImportant,
    deleteTodo
  } = useTodoState([]);

  return (
    <div className="App">
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      {/* When item is checked, checkbox is checked and strikethrough effect applied */}
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        toggleImportant={toggleImportant}
      />
    </div>
  );
}
