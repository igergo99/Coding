import {Routes, Route, Link, NavLink}from 'react-router-dom'
import './App.css';
import ContactUs from './components/ContactUs';
import EmployeeComponent from './components/EmployeeComponent';
import AboutScreen from './screens/AboutScreen';
import Employees from './screens/Employees';

function App() {
  return (
    <div className="App">
      Header
      <ul>
          <li>
            <NavLink to="/">Főoldal</NavLink>
            </li>
          <li>
            <NavLink to="/about">About</NavLink>
            </li>
          <li>
            <NavLink to="/contactus">Contact US!</NavLink>
            </li>
          <li>
            <NavLink to="/employees">Employees</NavLink>
            </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Főoldal</div>}/>
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/employees/:emp_id" element={ <EmployeeComponent /> } />
      </Routes>
    </div>
  );
}

export default App;
