import { useRouter } from 'next/router';
import Tasks from '../components/tasks/tasks';

const SelectedTasks = () => {
  const router = useRouter();

  return (
    <Tasks
      isCompleted={
        router.query.type && router.query.type === 'active' ? false : true
      }
    />
  );
};

export default SelectedTasks;
