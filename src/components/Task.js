import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'task__border' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <div className='task__text'>
        {task.text}
        <div className='task__close'>
          <FaTimes
            onClick={() => onDelete(task.id)}
            style={{
              color: 'red',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
      <div className='task__date'>{task.date}</div>
    </div>
  );
};

export default Task;
