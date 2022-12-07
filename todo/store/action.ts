import { createAction } from '@reduxjs/toolkit';
import { TaskItem } from '../types/common';
import { ActionType } from '../types/action';

export const addNewTask = createAction(
  ActionType.AddNewTask,
  (task: TaskItem) => ({
    payload: task,
  })
);

export const updateTasks = createAction(
  ActionType.UpdateTasks,
  (tasks: TaskItem[]) => ({
    payload: tasks,
  })
);

export const changeStatus = createAction(
  ActionType.ChangeStatus,
  (id: string) => ({
    payload: id,
  })
);

export const clearCompletedTasks = createAction(ActionType.ClearCompletedTasks);

export const changeAllStatuses = createAction(
  ActionType.СhangeAllStatuses,
  (status: boolean) => ({
    payload: status,
  })
);
