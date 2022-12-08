import { createAction } from '@reduxjs/toolkit';
import { TaskItemType } from '../types/common';
import { ActionType } from '../types/action';

export const addNewTask = createAction(
  ActionType.AddNewTask,
  (task: TaskItemType) => ({
    payload: task,
  })
);

export const updateTasks = createAction(
  ActionType.UpdateTasks,
  (tasks: TaskItemType[]) => ({
    payload: tasks,
  })
);

export const changeStatus = createAction(
  ActionType.ChangeStatus,
  (id: string) => ({
    payload: id,
  })
);

export const editTaskText = createAction(
  ActionType.EditTaskText,
  (id: string, text: string) => ({
    payload: {
      id,
      text,
    },
  })
);

export const deleteTask = createAction(ActionType.DeleteTask, (id: string) => ({
  payload: id,
}));

export const clearCompletedTasks = createAction(ActionType.ClearCompletedTasks);

export const changeAllStatuses = createAction(
  ActionType.СhangeAllStatuses,
  (status: boolean) => ({
    payload: status,
  })
);
