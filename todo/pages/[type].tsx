import { useRouter } from 'next/router';
import Layout from '../components/layout/layout';
import TaskList from '../components/task-list/task-list';

const SelectedTasks = () => {
  const router = useRouter();

  return (
    <Layout>
      <TaskList
        isCompleted={
          router.query.type && router.query.type === 'active' ? false : true
        }
      />
    </Layout>
  );
};

export default SelectedTasks;
