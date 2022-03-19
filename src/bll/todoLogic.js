import { useEffect, useState } from 'react';
import { todoListAPI } from '../api/api';
import Todos from '../components/todoList/Todos';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const tasksFromServer = await todoListAPI.fetchTodos();
      setTodos(tasksFromServer);
    };
    getTodos();
  }, []);

  const addTodo = async (text) => {
    const data = await todoListAPI.addTodo(text);
    setTodos([...todos, data]);
  };

  const deleteTodo = async (id) => {
    await todoListAPI.deleteTodo(id);

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleChecked = async (id) => {
    const data = await todoListAPI.toggleChecked(id);
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isChecked: data.isChecked } : todo)));
  };

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} deleteTask={deleteTodo} toggleChecked={toggleChecked} />
    </div>
  );
};

export default TodoList;
