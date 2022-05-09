import React from "react";
import { TextField } from "@mui/material";
import useInputState from "./useInputState";

export default function TodoForm({ saveTodo }) {
  const { value, reset, onChange } = useInputState("");

  return (
    // saveTodo method saves todo
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Add todo"
        onChange={onChange}
        value={value}
      />
    </form>
  );
}
