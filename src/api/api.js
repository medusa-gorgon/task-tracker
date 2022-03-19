export const taskTrackerAPI = {
  async fetchTasks() {
    const result = await fetch('http://localhost:5000/tasks');
    const data = await result.json();
    return data;
  },
  async fetchTask(id) {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await result.json();
    return data;
  },
  async deleteTask(id) {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
  },
  async createTask(newTask) {
    const result = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    const data = await result.json();
    return data;
  },
  async toggleReminder(id) {
    const taskToToggle = await this.fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const result = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });
    const data = await result.json();
    return data;
  },
};

export const todoListAPI = {
  async fetchTodos() {
    const result = await fetch('http://localhost:5000/todos');
    const data = await result.json();
    return data;
  },
  async fetchTodo(id) {
    const result = await fetch(`http://localhost:5000/todos/${id}`);
    const data = await result.json();
    return data;
  },
  async deleteTodo(id) {
    await fetch(`http://localhost:5000/todos/${id}`, { method: 'DELETE' });
  },
  async addTodo(text) {
    const newTodo = { text: text, isChecked: false };
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data;
  },
  async toggleChecked(id) {
    const todoToToggle = await this.fetchTodo(id);
    const updTodo = { ...todoToToggle, isChecked: !todoToToggle.isChecked };
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTodo),
    });
    const data = await response.json();
    return data;
  },
};
