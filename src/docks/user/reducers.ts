import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { added } from "./actions";
import { UserList } from "./types";

const initialState: UserList = { list: [] };

export const userReducer = createReducer(initialState, {
  [added.type]: (state, action: PayloadAction<string>) => ({
    ...state,
    list: [...state.list, { id: state.list.length + 1, name: action.payload }],
  }),
});
