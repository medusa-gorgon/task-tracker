import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className='tasks'>
      {tasks.map((task) => (
        <Task onToggle={onToggle} key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
