import { useState } from 'react';

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
    <div className='add__task'>
      <form action='' className='add__form' onSubmit={onSubmit}>
        <div className='form__control'>
          <label htmlFor='newTask'>New task</label>
          <input
            id='newTask'
            type='text'
            placeholder='enter a task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form__control'>
          <label htmlFor='newTaskDate'>Date</label>
          <input
            id='newTaskDate'
            type='text'
            placeholder='enter date and time'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='form__control form__check'>
          <label htmlFor='newTaskReminder'>Set a reminder</label>
          <input
            id='newTaskReminder'
            type='checkbox'
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input className='btn btn__form' type='submit' value='Save task' />
      </form>
    </div>
  );
};

export default AddTask;
