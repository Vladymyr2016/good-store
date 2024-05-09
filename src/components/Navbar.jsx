import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={s.header}>
      <NavLink className={s.logo} to="/">
        GOOD-SHOP
      </NavLink>
      <nav className={s.nav}>
        <NavLink className={s.home} to="/">
          Home
        </NavLink>
        <NavLink className={s.cart} to="/Cart">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
