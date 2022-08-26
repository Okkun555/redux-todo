import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "../../docks/todo/actions";
import { Task, TodoListState } from "../../docks/todo/types";

const TodoList: FC = () => {
  const todoList = useSelector<TodoListState, Task[]>((state) => state.list);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Todo一覧</h1>
      <ul>
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <button
                type="button"
                onClick={() => dispatch(toggleStatus(task.id))}
              >
                変更
              </button>
              <li>{task.task}</li>
              <span>{task.completed ? "完了" : "未完了"}</span>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
