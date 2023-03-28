import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';
import { deleteTask, editTaskText, addNewTag } from '../../store/action';
import { TaskItemType } from '../../types/common';

type TaskItemProps = {
  task: TaskItemType;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TaskItem = ({ task, onHandleChange }: TaskItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState<string>(task.text);
  const [isEditing, setIsEditing] = useState(false);

  const addTags = (value: string) => {
    value.split(' ').forEach((word) => {
      if (word.startsWith('#')) {
        dispatch(addNewTag(word.substring(1)))
      }
    })
  }

  const handleDeleteClick = () => {
    dispatch(deleteTask(task.id));
  };

  const handleDoubleClickText = () => {
    setIsEditing(true);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEditText = () => {
    addTags(text);
    const value = text.split(' ').map((word) => {
      if (word.startsWith('#')) {
        return word.substring(1)
      }
      return word
    }).join(' ');

    dispatch(editTaskText(task.id, value));
    setIsEditing(false);
  };

  return (
    <li className="task-item" key={task.id} data-testid="task-list-item">
      <label className="task-item_label">
        <input
          type="checkbox"
          className="task-item_checkbox"
          id={task.id}
          checked={task.isChecked}
          onChange={onHandleChange}
          name="item"
        />
        <span className="task-item_box"></span>
      </label>
      {isEditing ? (
        <form onSubmit={handleEditText} data-testid="add-form">
          <label>
            <input
              className="edit-field"
              value={text}
              onChange={handleChangeValue}
              onBlur={handleEditText}
              data-testid="add-field"
            />
          </label>
        </form>
      ) : (
        <p
          className={`task-item_text ${task.isChecked && 'task-item_text--through'
            }`}
          onDoubleClick={handleDoubleClickText}
        >
          {task.text}
          <span className="task-item_delete">
            <button
              type="button"
              className="task-item_delete-button"
              onClick={handleDeleteClick}
            >
              ✖
            </button>
          </span>
        </p>
      )}
    </li>
  );
};

export default TaskItem;
