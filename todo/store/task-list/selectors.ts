import { TaskItem } from '../../types/common';
import { createSelector } from 'reselect';
import { TaskList } from '../../types/state';

export const getTasks = (state: TaskList): TaskItem[] => state.tasks;

export const getSelectedTasks = (status: boolean | null) =>
  createSelector(getTasks, (tasks) =>
    tasks.filter((task) => task.isChecked === status)
  );
