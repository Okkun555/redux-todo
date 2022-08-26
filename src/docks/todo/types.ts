export type Task = {
  id: number;
  task: string;
  completed: boolean;
};

export type TodoListState = {
  list: Task[];
};
