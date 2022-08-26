import { Reducer } from "redux";
import { TodoAddAction, TodoActionType as Type } from "./actions";
import { TodoListState } from "./types";

export const initialState: TodoListState = { list: [] };

export const todoReducer: Reducer<TodoListState, TodoAddAction> = (
  state: TodoListState = initialState,
  action: TodoAddAction
): TodoListState => {
  switch (action.type) {
    case Type.ADD:
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
    default: {
      // eslint-disable-next-line
      //   const _: never = action.type;
      return state;
    }
  }
};
