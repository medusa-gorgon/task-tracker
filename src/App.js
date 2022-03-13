import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const result = await fetch('http://localhost:5000/tasks');
    const data = await result.json();
    return data;
  };
  const fetchTask = async (id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await result.json();
    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (newTask) => {
    const result = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    const data = await result.json();
    setTasks([...tasks, data]);

    // const task = { id: tasks.length + 1, ...newTask };
    // setTasks([...tasks, task]);
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const result = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });
    const data = await result.json();
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
  };

  const toggleAdd = (id) => {
    setShowAddTask(!showAddTask);
  };
  return (
    <BrowserRouter>
      <div className='container'>
        <Header onAdd={toggleAdd} btnText={showAddTask ? 'Hide' : 'Add'} />

        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                {showAddTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask} />
                ) : (
                  'No tasks, yet'
                )}
              </>
            }
          ></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
