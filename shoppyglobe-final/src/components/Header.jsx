import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
  </nav>
);

export default Header;
