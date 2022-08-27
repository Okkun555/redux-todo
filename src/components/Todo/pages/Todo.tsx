import { FC } from "react";
import { Card } from "react-bootstrap";
import AddTask from "../../organisms/AddTask";
import TodoList from "../../organisms/TodoList";

const Todo: FC = () => {
  return (
    <>
      <Card style={{ width: "40%" }}>
        <Card.Body>
          <Card.Title>タスクの追加</Card.Title>
          <AddTask />
        </Card.Body>
      </Card>
      <div className="list-area">
        <TodoList />
      </div>
    </>
  );
};

export default Todo;
