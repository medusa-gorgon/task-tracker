import { useState } from 'react';
import styles from './AddTask.module.css';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please, add a task');
    }
    addTask({ text, date, reminder });

    setText('');
    setDate('');
    setReminder(false);
  };
  return (
    <div className={styles.add__task}>
      <form action='' className={styles.add__form} onSubmit={onSubmit}>
        <div className={styles.form__control}>
          <label htmlFor='newTask'>New task</label>
          <input
            className={styles.input}
            id='newTask'
            type='text'
            placeholder='enter a task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={styles.form__control}>
          <label htmlFor='newTaskDate'>Date</label>
          <input
            className={styles.input}
            id='newTaskDate'
            type='text'
            placeholder='enter date and time'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={`${styles.form__control} ${styles.form__check}`}>
          <input
            className={styles.input}
            id='newTaskReminder'
            type='checkbox'
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          <label htmlFor='newTaskReminder'>Set a reminder</label>
        </div>
        <input className={`btn ${styles.btn__form}`} type='submit' value='Save task' />
      </form>
    </div>
  );
};

export default AddTask;
