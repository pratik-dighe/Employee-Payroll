import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EmployeeList from './pages/EmployeeList';
import About from './pages/About';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  const handleAdd = (emp) => {
    setEmployees([...employees, emp]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEmployee onAdd={handleAdd} />} />
          <Route path="/list" element={<EmployeeList employees={employees} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
