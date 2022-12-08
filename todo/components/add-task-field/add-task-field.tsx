import { nanoid } from 'nanoid';
import Image from 'next/image';
import { useAppDispatch } from '../../hooks/hooks';
import { addNewTask, changeAllStatuses } from '../../store/action';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedTasks, getTasks } from '../../store/task-list/selectors';

const AddTaskField = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const allTasks = useSelector(getTasks);
  const checkedTasks = useSelector(getSelectedTasks(true));

  const [fieldValue, setFieldValue] = useState('');

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value);
  };

  const handleArrowClick = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('click');

    dispatch(changeAllStatuses(e.currentTarget.checked));
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addNewTask({
        text: fieldValue,
        isChecked: false,
        id: nanoid(),
      })
    );
    setFieldValue('');
  };

  return (
    <div className="add-task-field_container">
      <input
        type="checkbox"
        id="checked-all"
        onChange={handleArrowClick}
        hidden
        checked={allTasks.length === checkedTasks.length}
      ></input>
      <label htmlFor="checked-all" className="add-task-field_label">
        {allTasks.length !== 0 && (
          <Image
            className=".add-field_checkbox--checked"
            src={
              allTasks.length === checkedTasks.length
                ? '/arrow-down-checked.svg'
                : '/arrow-down.svg'
            }
            width={40}
            height={40}
            alt="Выполнить все задачи"
          ></Image>
        )}
      </label>
      <form onSubmit={handleAddTask} data-testid="add-form">
        <input
          className="add-field"
          type="text"
          value={fieldValue}
          onChange={handleChangeValue}
          placeholder="What needs to be done?"
          data-testid="add-field"
        />
      </form>
    </div>
  );
};

export default AddTaskField;
