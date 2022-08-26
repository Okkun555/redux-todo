import { Reducer } from "redux";
import { TodoActionType as Type, TodoAction } from "./actions";
import { TodoListState } from "./types";

export const initialState: TodoListState = { list: [] };

export const todoReducer: Reducer<TodoListState, TodoAction> = (
  state: TodoListState = initialState,
  action: TodoAction
): TodoListState => {
  switch (action.type) {
    case Type.ADD:
      if (action.task === undefined) return state;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            task: action.task,
            completed: false,
          },
        ],
      };
    case Type.STATUS_TOGGLE:
      return {
        ...state,
        list: state.list
          .filter((taskItem) => taskItem.id === action.id)
          .map((taskItem) => {
            return {
              id: taskItem.id,
              task: taskItem.task,
              completed: !taskItem.completed,
            };
          }),
      };
    default: {
      // eslint-disable-next-line
      const non: never = action.type;
      return state;
    }
  }
};
