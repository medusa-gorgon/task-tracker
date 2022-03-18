import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.link__block}>
          <Link to='/task-tracker' className={styles.link}>
            Task traker
          </Link>
        </div>
        <div className={styles.link__block}>
          <Link to='/to-do-list' className={styles.link}>
            To-do list
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
