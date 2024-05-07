import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">GOOD-SHOP</NavLink>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
