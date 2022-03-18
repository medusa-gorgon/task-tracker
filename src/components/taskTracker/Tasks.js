import Task from './Task';
import styles from './Tasks.module.css';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((task) => (
        <Task onToggle={onToggle} key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
