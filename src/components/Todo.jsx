import { memo } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  return <TodoList />;
};

export default memo(Todo);
