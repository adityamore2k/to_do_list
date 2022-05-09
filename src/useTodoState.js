import { useState } from "react";

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  // Try to modify this code
  // Initial state is an array of todo objects
  // object - id,title,completed

  return {
    todos,
    addTodo: (todoText) => {
      // Set todo to be object
      setTodos([
        ...todos,
        { title: todoText, completed: false, isImportant: false }
      ]);
    },
    toggleCompleted: (index) => {
      setTodos((prevTodos) => {
        let newTodos = [...prevTodos];
        for (let i = 0; i < newTodos.length; ++i) {
          if (index === i) {
            newTodos[i].completed = !newTodos[i].completed;
          }
        }
        return newTodos;
      });
    },
    toggleImportant: (index) => {
      setTodos((prevTodos) => {
        let newTodos = [...prevTodos];
        for (let i = 0; i < newTodos.length; ++i) {
          if (index === i) {
            newTodos[i].isImportant = !newTodos[i].isImportant;
          }
        }
        return newTodos;
      });
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    }
  };
};
