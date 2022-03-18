import styles from './Todo.module.css';

const Todo = ({ todo, deleteTask, toggleChecked }) => {
  return (
    <div className={todo.isChecked ? `${styles.todo} ${styles.checked}` : `${styles.todo}`}>
      <form action='' className={styles.form}>
        <input
          type='checkbox'
          name={todo.id}
          id={todo.id}
          className={styles.checkbox}
          checked={todo.isChecked ? true : false}
          onChange={() => {
            toggleChecked(todo.id);
          }}
        />
        <label className={todo.isChecked ? `${styles.label} ${styles.checked}` : `${styles.label}`} htmlFor={todo.id}>
          {todo.text}
        </label>
      </form>
      <span
        className={styles.delete}
        // className={todo.isChecked ? `${styles.delete} ${styles.checked}` : `${styles.delete}`}
        onClick={() => {
          deleteTask(todo.id);
        }}
      ></span>
    </div>
  );
};

export default Todo;
