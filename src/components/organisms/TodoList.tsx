import { FC } from "react";
import { useSelector } from "react-redux";
import { Task, TodoListState } from "../../docks/todo/types";

const TodoList: FC = () => {
  const todoList = useSelector<TodoListState, Task[]>((state) => state.list);
  return (
    <>
      <h1>Todo一覧</h1>
      <ul>
        {todoList.map((task) => {
          return <li key={task.id}>{task.task}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
