import { ValueOf } from "../common/types";

export const TodoActionType = {
  ADD: "todo/add",
};

export type TodoAddAction = {
  type: ValueOf<typeof TodoActionType>;
  task: string;
};

export const todoAdd = (task: string): TodoAddAction => ({
  type: "todo/add",
  task,
});
