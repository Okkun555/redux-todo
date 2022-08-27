import { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AddTask from "../../organisms/AddTask";
import TodoList from "../../organisms/TodoList";

const Todo: FC = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={4}>
            <Card>
              <Card.Body>
                <Card.Title>タスクの追加</Card.Title>
                <AddTask />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={8}>
            <Card>
              <Card.Body>
                <Card.Title>Todo一覧</Card.Title>
                <TodoList />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Todo;
