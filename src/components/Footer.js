import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>Copyright &copy; 2022</div>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
