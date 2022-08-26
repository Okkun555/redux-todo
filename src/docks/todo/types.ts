export type Task = {
  id: number;
  task: string;
  completed: false;
};

export type TodoListState = {
  list: Task[];
};
