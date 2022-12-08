import { useSelector } from 'react-redux';
import { getTasks } from '../../store/task-list/selectors';
import { navLinks } from '../../const';
import NavItem from '../nav-item/nav-item';
import ClearButton from '../clear-button/clear-button';

const ControlPanel = (): JSX.Element => {
  const tasks = useSelector(getTasks);

  const leftItemsCount = tasks.filter(
    (task) => task.isChecked === false
  ).length;

  return (
    <div className="controls-panel paper-shadow">
      <p className="count">{`${leftItemsCount} items left`}</p>
      <ul className="buttons-container">
        {navLinks.map((el) => {
          return <NavItem item={el} key={el.name} />;
        })}
      </ul>
      <ClearButton />
    </div>
  );
};

export default ControlPanel;
