import { VISIBILITY_FILTERS } from "./actions";

export type VsibilityFilterTypes =
  typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];

// todo
export type TodoState = {
  allIds: number[];
  byIds: { [key: string]: TaskState };
};

export type TaskState = {
  content: string;
  completed: boolean;
};

// state
export type State = {
  visibilityFilter: VsibilityFilterTypes;
  todos: TodoState;
};
