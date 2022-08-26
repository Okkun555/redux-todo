import { FC } from "react";
import AddTask from "../../organisms/AddTask";
import TodoList from "../../organisms/TodoList";

const Todo: FC = () => {
  return (
    <>
      <h1>タスク管理</h1>
      <div className="add-area">
        <AddTask />
      </div>
      <div className="list-area">
        <TodoList />
      </div>
    </>
  );
};

export default Todo;
