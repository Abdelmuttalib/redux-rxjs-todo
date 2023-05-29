import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCompletedTodos, restTodoList } from "../redux/actions/index";
import {
  Button,
  Divider,
  Typography,
  makeStyles,
  Grid,
  List,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(3),
  },
  buttons: {
    paddingTop: theme.spacing(3),
    display: "flex",
    gap: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const { list } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const resetList = () => {
    dispatch(restTodoList());
  };

  const clearCompleted = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className={classes.title}>
            Todo list
          </Typography>
          <List dense={true} className={classes.list}>
            {list.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </List>
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button color="secondary" variant="contained" onClick={resetList}>
          Reset List
        </Button>
        <Button color="secondary" variant="contained" onClick={clearCompleted}>
          Clear Completed
        </Button>
      </div>
      <Divider className={classes.divider} />
    </>
  );
};

export default TodoList;
