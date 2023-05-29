import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../redux/actions/index";
import {
  Checkbox,
  makeStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  TextField,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    gap: theme.spacing(1),
  },
  completedText: {
    textDecoration: "line-through",
  },
}));

const TodoItem = ({ id, text, completed }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isEditing, setEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleUpdateItem = (event) => {
    event.preventDefault();

    if (currentText === "" || currentText === text) {
      setEditing(false);
      return;
    }
    dispatch(editTodo({ id, text: currentText }));
    setEditing(false);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      {isEditing ? (
        <form className={classes.form} onSubmit={handleUpdateItem}>
          <TextField
            size="small"
            variant="outlined"
            label="edit todo item"
            name="todo"
            defaultValue={text}
            onChange={(event) => setCurrentText(event.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            onClick={handleUpdateItem}
          >
            Edit Item
          </Button>
        </form>
      ) : (
        <ListItemText
          primary={text}
          className={completed ? classes.completedText : null}
        />
      )}
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="update"
          onClick={() => setEditing((current) => !current)}
        >
          <CreateIcon />
        </IconButton>
        <Checkbox edge="end" onChange={handleToggle} />
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
