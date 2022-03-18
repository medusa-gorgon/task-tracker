import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Copyright &copy; 2022</div>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
