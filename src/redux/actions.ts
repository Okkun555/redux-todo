import { ValueOf, VsibilityFilterTypes } from "./types";

export type ActionTypes = {
  ADD_TODO: "todo/add";
  TOGGLE_TODO: "todo/toggle";
  SET_FILTER: "filter/set";
};

type AddTodoAction = {
  type: ValueOf<ActionTypes>;
  payload: {
    id: number;
    content: string;
  };
};

let nextIds = 0;

export const addTodo = (content: string): AddTodoAction => ({
  type: "todo/add",
  payload: {
    id: ++nextIds,
    content,
  },
});

type ToggleTodoAction = {
  type: ValueOf<ActionTypes>;
  payload: {
    id: number;
  };
};

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: "todo/toggle",
  payload: { id },
});

type SetFilterAction = {
  type: ValueOf<ActionTypes>;
  payload: {
    filter: VsibilityFilterTypes;
  };
};

export type TodoActions = AddTodoAction | ToggleTodoAction | SetFilterAction;
