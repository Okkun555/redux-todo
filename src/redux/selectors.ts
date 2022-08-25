import { State } from "./types";

export type Task = {
  id: number;
  content: string;
  completed: boolean;
};

export const getTodoList = (store: State): number[] =>
  store && store.todos ? store.todos.allIds : [];

export const getTaskById = (store: State, id: number): Task => {
  return { ...store.todos.byIds[id], id };
};

export const getTodos = (store: State): Task[] =>
  getTodoList(store).map((id) => getTaskById(store, id));
