import { useEffect, useState } from 'react';
import { taskTrackerAPI } from '../api/api';
import AddTask from '../components/taskTracker/AddTask';
import Header from '../components/taskTracker/Header';
import Tasks from '../components/taskTracker/Tasks';

const TaskTracker = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await taskTrackerAPI.fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    await taskTrackerAPI.deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (newTask) => {
    const data = await taskTrackerAPI.createTask(newTask);
    setTasks([...tasks, data]);

    // const task = { id: tasks.length + 1, ...newTask };
    // setTasks([...tasks, task]);
  };

  const toggleReminder = async (id) => {
    const data = await taskTrackerAPI.toggleReminder(id);
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
  };

  const toggleAdd = (id) => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div>
      <Header onAdd={toggleAdd} btnText={showAddTask ? 'Hide' : 'Add'} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? <Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask} /> : 'No tasks, yet'}
    </div>
  );
};

export default TaskTracker;
