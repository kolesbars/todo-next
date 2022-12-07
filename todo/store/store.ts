import { configureStore } from '@reduxjs/toolkit';
import { taskList } from '../store/task-list/task-list';

export const store = configureStore({
  reducer: taskList,
});
