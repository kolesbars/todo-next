import { TaskItemType } from "../../types/common";
import { createSelector } from "reselect";
import { TaskList } from "../../types/state";

export const getTasks = (state: TaskList): TaskItemType[] => state.tasks;
export const getTags = (state: TaskList): string[] => state.tags;
export const getCurrentTag = (state: TaskList): string => state.currentTag;

export const getSelectedTasks = (status: boolean | null) =>
  createSelector(getTasks, (tasks) =>
    tasks.filter((task) => task.isChecked === status)
  );
