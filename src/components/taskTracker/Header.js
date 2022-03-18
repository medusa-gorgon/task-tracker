const Header = ({ onAdd, btnText }) => {
  return (
    <div className='header'>
      <h1>Task Tracker</h1>

      <button className='btn' onClick={onAdd}>
        {btnText}
      </button>
    </div>
  );
};

export default Header;
