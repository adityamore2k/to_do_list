import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

export default function TodoList({
  todos,
  toggleCompleted,
  toggleImportant,
  deleteTodo
}) {
  // console.log(todos);
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem dense button primary="MyText" key={index.toString()}>
          <Checkbox
            tabIndex={-1}
            disableRipple
            checked={todos[index].completed}
            onChange={() => toggleCompleted(index)}
          />
          <ListItemText
            primary={todo.title}
            primaryTypographyProps={{
              style: {
                textDecoration: todos[index].completed ? "line-through" : "none"
              }
            }}
          />
          <IconButton onClick={() => toggleImportant(index)}>
            {todos[index].isImportant ? (
              <StarIcon style={{ color: "yellow" }} />
            ) : (
              <StarOutlineIcon />
            )}
          </IconButton>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
