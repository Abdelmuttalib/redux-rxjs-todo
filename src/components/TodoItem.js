import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/index";
import {
  Checkbox,
  makeStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  form: {
    paddingTop: theme.spacing(3),
  },
  completedText: {
    textDecoration: "line-through",
  },
}));

const TodoItem = ({ id, text, completed }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleUpdateItem = (id) => {
    // TODO: implement update item on pencil icon click
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={text}
        className={completed ? classes.completedText : null}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="update" onClick={handleUpdateItem}>
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
