import { ChangeEvent } from 'react';
import { changeStatus } from '../../store/action';
import { TaskItemType } from '../../types/common';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTasks, getSelectedTasks, getCurrentTag } from '../../store/task-list/selectors';
import { updateTasks } from '../../store/action';
import { EMPTY_ARRAY_LENGTH } from '../../const';
import TaskItem from '../task-item/task-item';

type TasksListProps = {
  isCompleted: boolean | null;
};

function TaskList({ isCompleted }: TasksListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const allTasks = useAppSelector(getTasks);
  const selectedTasks = useAppSelector(getSelectedTasks(isCompleted));
  const currentTag = useAppSelector(getCurrentTag);

  const [tasks, setTasks] = useState<TaskItemType[]>(allTasks);
  const [filteredTasks, setFilteredTasks] = useState<TaskItemType[]>([]);

  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(e.target.id));
  };

  useEffect(() => {
    setFilteredTasks(tasks.filter((task) => task.text.includes(currentTag)))
  }, [currentTag, tasks])

  useEffect(() => {
    const storegedItems = localStorage.getItem('tasks');
    if (storegedItems) {
      dispatch(updateTasks(JSON.parse(storegedItems)));
    }
  }, []);

  useEffect(() => {
    if (router.query.type) {
      setTasks(selectedTasks);
    } else {
      setTasks(allTasks);
    }
  }, [router, allTasks]);

  useEffect(() => {
    if (allTasks.length === EMPTY_ARRAY_LENGTH) {
      localStorage.clear();
    } else {
      localStorage.setItem('tasks', JSON.stringify(allTasks));
    }
  }, [allTasks]);

  return (
    <ul className="task-list" data-testid="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          onHandleChange={handleChangeStatus}
        />
      ))}
    </ul>
  );
}

export default TaskList;
