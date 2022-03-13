import { useLocation } from 'react-router-dom';

const Header = ({ onAdd, btnText }) => {
  const location = useLocation();
  return (
    <div className='header'>
      <h1>Task Tracker</h1>
      {location.pathname === '/' && (
        <button className='btn' onClick={onAdd}>
          {btnText}
        </button>
      )}
    </div>
  );
};

export default Header;
