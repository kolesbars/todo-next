import ClearButton from '../clear-button/clear-button';
import { useSelector } from 'react-redux';
import { getTasks } from '../../store/task-list/selectors';
import NavItem from '../nav-item/nav-item';

const navArr = [
  {
    name: 'All',
    path: '/',
  },
  {
    name: 'Active',
    path: '/active',
  },
  {
    name: 'Completed',
    path: '/completed',
  },
];

const ControlPanel = (): JSX.Element => {
  const tasks = useSelector(getTasks);

  const leftItemsCount = tasks.filter(
    (task) => task.isChecked === false
  ).length;

  return (
    <div className="controls-panel">
      <p className="count">{`${leftItemsCount} items left`}</p>
      <ul className="buttons-container">
        {navArr.map((el) => {
          return <NavItem item={el} key={el.name} />;
        })}
      </ul>
      <ClearButton />
    </div>
  );
};

export default ControlPanel;
