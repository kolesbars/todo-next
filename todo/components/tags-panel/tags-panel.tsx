import { useSelector } from 'react-redux';
import { getTags, getCurrentTag } from '../../store/task-list/selectors';
import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { changeCurrentTag, deleteTag } from '../../store/action';
import { EMPTY_ARRAY_LENGTH } from '../../const';

const TagsPanel = (): JSX.Element => {
    const tags = useSelector(getTags);
    const currentTag = useSelector(getCurrentTag);
    const dispatch = useAppDispatch();

    const handleTagClick = (e: FormEvent<HTMLParagraphElement>) => {
        if (e.currentTarget.textContent) {
            dispatch(changeCurrentTag(e.currentTarget.textContent))
        }
    }

    const handleDeleteClick = (el: string) => {
        dispatch(deleteTag(el))
        if (currentTag === el) {
            dispatch(changeCurrentTag(''))
        }
    }

    const handleResetClick = () => {
        dispatch(changeCurrentTag(''))
    }

    return (
        <>
            {tags.length > 0 ?
                <div className="tags-panel">
                    <p className="count">Tags:</p>
                    <ul className="tag-items">
                        {tags.map((el) => {
                            return <>
                                <p className={`${currentTag === el ? 'tag-item--active' : ''} tag-item`} key={el} onClick={handleTagClick}>{el}</p>
                                <button
                                    type="button"
                                    className="tag-item_delete-button"
                                    onClick={() => handleDeleteClick(el)}
                                >
                                    ✖
                                </button>
                            </>;
                        })}
                    </ul>
                    <button
                        className="reset-button"
                        disabled={tags.length === EMPTY_ARRAY_LENGTH}
                        type="button"
                        onClick={handleResetClick}
                    >
                        Reset
                    </button>
                </div> : ''
            }
        </>

    );
};

export default TagsPanel;
