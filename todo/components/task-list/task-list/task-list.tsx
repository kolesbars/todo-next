import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { changeStatus } from '../../../store/action';
import { TaskItem } from '../../../types/common';

type TaskListProps = {
  tasks: TaskItem[];
};

function TaskList({ tasks }: TaskListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(e.target.id));
  };

  return (
    <ul className="task-list" data-testid="task-list">
      {tasks.map((task) => (
        <li className="task-item" key={task.id} data-testid="task-list-item">
          <label className="item_label">
            <input
              type="checkbox"
              className="item_checkbox"
              id={task.id}
              checked={task.isChecked}
              onChange={handleChangeStatus}
              name="item"
            />
            <span className="item_box"></span>
            <p className="item_text">{task.task}</p>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
