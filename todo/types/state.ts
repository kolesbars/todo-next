import { store } from '../store/store';
import { TaskItem } from './common';

export type TaskList = {
  tasks: TaskItem[];
};

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
