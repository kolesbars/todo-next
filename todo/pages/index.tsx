import Layout from '../components/layout/layout';
import TaskList from '../components/task-list/task-list';

const Home = () => {
  return (
    <Layout>
      <TaskList isCompleted={null} />
    </Layout>
  )
};

export default Home;
