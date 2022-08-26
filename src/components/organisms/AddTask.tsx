import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../docks/todo/actions";

const AddTask: FC = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <>
      <input type="text" name="task" onChange={handleChange} />
      <button type="button" onClick={() => dispatch(todoAdd(task))}>
        追加
      </button>
    </>
  );
};

export default AddTask;
