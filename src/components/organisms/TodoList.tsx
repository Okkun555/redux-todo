import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoRemove, toggleStatus } from "../../docks/todo/actions";
import { Task, TodoListState } from "../../docks/todo/types";

const TodoList: FC = () => {
  const todoList = useSelector<TodoListState, Task[]>((state) => state.list);
  const dispatch = useDispatch();

  return todoList.length ? (
    <>
      <ul>
        {todoList.map((task) => {
          return (
            <li key={task.id}>
              <button
                type="button"
                onClick={() => dispatch(toggleStatus(task.id))}
              >
                変更
              </button>
              <span>{task.task}</span>
              <span>{task.completed ? "完了" : "未完了"}</span>
              <button
                type="button"
                onClick={() => dispatch(todoRemove(task.id))}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <>タスクはありません</>
  );
};

export default TodoList;
