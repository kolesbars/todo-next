import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTasks, getSelectedTasks } from '../../store/task-list/selectors';
import { TaskItem } from '../../types/common';
import { updateTasks } from '../../store/action';
import TaskList from '../task-list/task-list/task-list';

type TasksProps = {
  isCompleted: boolean | null;
};

const Tasks = ({ isCompleted }: TasksProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const allTasks = useAppSelector(getTasks);
  const selectedTasks = useAppSelector(getSelectedTasks(isCompleted));

  const [tasks, setTasks] = useState<TaskItem[]>(allTasks);

  useEffect(() => {
    if (router.query.type) {
      setTasks(selectedTasks);
    } else {
      setTasks(allTasks);
    }
  }, [router, allTasks]);

  return <TaskList tasks={tasks} />;
};

export default Tasks;
