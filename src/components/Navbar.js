import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/add">Add Employee</Link> | 
      <Link to="/list">Employee List</Link> | 
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
