import { TaskList } from "../../types/state";
import { createReducer } from "@reduxjs/toolkit";
import {
  addNewTask,
  changeStatus,
  clearCompletedTasks,
  updateTasks,
  changeAllStatuses,
  deleteTask,
  editTaskText,
  addNewTag,
  changeCurrentTag,
  deleteTag,
} from "../action";

const initialState: TaskList = {
  tasks: [],
  tags: [],
  currentTag: "",
};

const taskList = createReducer(initialState, (builder) => {
  builder
    .addCase(addNewTask, (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    })
    .addCase(updateTasks, (state, action) => {
      state.tasks = action.payload;
    })
    .addCase(clearCompletedTasks, (state) => {
      state.tasks = state.tasks.filter((task) => task.isChecked === false);
    })
    .addCase(changeAllStatuses, (state, action) => {
      if (action.payload) {
        state.tasks.forEach((task) => (task.isChecked = true));
      } else {
        state.tasks.forEach((task) => (task.isChecked = false));
      }
    })
    .addCase(changeStatus, (state, action) => {
      const item = state.tasks.find((task) => task.id === action.payload);
      if (item) {
        item.isChecked = !item.isChecked;
      }
    })
    .addCase(deleteTask, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    })
    .addCase(editTaskText, (state, action) => {
      const item = state.tasks.find((task) => task.id === action.payload.id);
      if (item) {
        item.text = action.payload.text;
      }
    })
    .addCase(addNewTag, (state, action) => {
      if (!state.tags.includes(action.payload)) {
        state.tags = [...state.tags, action.payload];
      }
    })
    .addCase(changeCurrentTag, (state, action) => {
      state.currentTag = action.payload;
    })
    .addCase(deleteTag, (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    });
});

export { taskList };
