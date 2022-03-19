import { useState } from 'react';
import Todo from './Todo';
import styles from './Todos.module.css';

const Todos = ({ todos, addTodo, deleteTask, toggleChecked }) => {
  const [text, setText] = useState('');
  return (
    <div className={styles.block}>
      <div className={styles.inputBLock}>
        <form
          action=''
          onSubmit={(e) => {
            e.preventDefault();
            if (!text) {
              return alert('Please, add a task');
            }
            addTodo(text);

            setText('');
          }}
        >
          <input
            type='text'
            className={styles.input}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className={`${styles.btn} btn`}>Add</button>
        </form>
      </div>
      <div className={styles.todos}>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} deleteTask={deleteTask} toggleChecked={toggleChecked} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
