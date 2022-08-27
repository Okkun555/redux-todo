import React, { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../docks/todo/actions";

const AddTask: FC = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onClickAdd = () => {
    if (!task) return;
    dispatch(todoAdd(task));
  };

  return (
    <>
      <Row>
        <Col xs={10}>
          <Form.Control type="text" id="task" onChange={handleChange} />
        </Col>
        <Col>
          <Button variant="primary" onClick={onClickAdd} disabled={!task}>
            追加
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AddTask;
