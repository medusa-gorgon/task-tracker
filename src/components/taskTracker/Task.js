import { FaTimes } from 'react-icons/fa';
import styles from './Task.module.css';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`${styles.task} ${task.reminder ? `${styles.task__border}` : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className={styles.task__text}>
        {task.text}
        <div className={styles.task__close}>
          <div
            className='delete'
            onClick={() => onDelete(task.id)}
            style={{
              color: 'red',
            }}
          ></div>
        </div>
      </div>
      <div className={styles.task__date}>{task.date}</div>
    </div>
  );
};

export default Task;
