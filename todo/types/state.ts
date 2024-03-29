import { store } from "../store/store";
import { TaskItemType } from "./common";

export type TaskList = {
  tasks: TaskItemType[];
  tags: string[];
  currentTag: string;
};

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
