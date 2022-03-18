import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Nav from './components/Nav';
import AddTask from './components/taskTracker/AddTask';
import Header from './components/taskTracker/Header';
import Tasks from './components/taskTracker/Tasks';
import Todos from './components/todoList/Todos';

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

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTodos();
      setTodos(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:5000/todos');
    const data = await response.json();
    return data;
  };

  const fetchTodo = async (id) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`);
    const data = await response.json();
    return data;
  };

  const addTodo = async (text) => {
    const newTodo = { text: text, isChecked: false };
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();

    setTodos([...todos, data]);
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleChecked = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updTodo = { ...todoToToggle, isChecked: !todoToToggle.isChecked };
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTodo),
    });
    const data = await response.json();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isChecked: data.isChecked } : todo)));
  };

  const pushLast = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updTodo = { ...todoToToggle, isChecked: !todoToToggle.isChecked };
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTodo),
    });
    const data = await response.json();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isChecked: data.isChecked } : todo)));
  };
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav />
        <div className='block'>
          <Routes>
            <Route
              path='/to-do-list'
              element={<Todos todos={todos} addTodo={addTodo} deleteTask={deleteTodo} toggleChecked={toggleChecked} />}
            ></Route>
            <Route
              path='/task-tracker'
              element={
                <>
                  <Header onAdd={toggleAdd} btnText={showAddTask ? 'Hide' : 'Add'} />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
