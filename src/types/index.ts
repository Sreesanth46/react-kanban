export type ID = string;

export interface Task {
  id: ID;
  title: string;
  content?: string;
  createdAt: Date;
}

export interface Column {
  id: ID;
  tasks: Task[];
  createdAt: Date;
}
