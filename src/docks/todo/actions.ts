import { ValueOf } from "../common/types";

export const TodoActionType = {
  ADD: "todo/add",
  STATUS_TOGGLE: "status/toggle",
} as const;

export type TodoAction = {
  type: ValueOf<typeof TodoActionType>;
  id?: number;
  task?: string;
};

export const todoAdd = (task: string): TodoAction => ({
  type: "todo/add",
  task,
});

export const toggleStatus = (targetId: number): TodoAction => ({
  type: "status/toggle",
  id: targetId,
});
