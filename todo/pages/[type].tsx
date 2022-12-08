import { useRouter } from 'next/router';
import TaskList from '../components/task-list/task-list';

const SelectedTasks = () => {
  const router = useRouter();

  return (
    <TaskList
      isCompleted={
        router.query.type && router.query.type === 'active' ? false : true
      }
    />
  );
};

export default SelectedTasks;
