import { ReactNode } from 'react';
import { getTasks } from '../../store/task-list/selectors';
import { useAppSelector } from '../../hooks/hooks';
import { EMPTY_ARRAY_LENGTH } from '../../const';
import AddTaskField from '../add-task-field/add-task-field';
import ControlPanel from '../control-panel/control-panel';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const tasks = useAppSelector(getTasks);

  return (
    <div className="main">
      <h1 className="title">todos</h1>
      <div className="container">
        <AddTaskField />
        {children}
        {tasks.length !== EMPTY_ARRAY_LENGTH && <ControlPanel />}
      </div>
    </div>
  );
};

export default Layout;
