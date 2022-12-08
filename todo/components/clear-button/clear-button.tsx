import { EMPTY_ARRAY_LENGTH } from '../../const';
import { clearCompletedTasks } from '../../store/action';
import { getSelectedTasks } from '../../store/task-list/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const ClearButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(getSelectedTasks(true));

  const handleClearButtonClick = () => {
    dispatch(clearCompletedTasks());
  };

  return (
    <div className="button-wrapper">
      <button
        className="clear-button"
        disabled={tasks.length === EMPTY_ARRAY_LENGTH}
        type="button"
        onClick={handleClearButtonClick}
      >
        Clear completed
      </button>
    </div>
  );
};

export default ClearButton;
