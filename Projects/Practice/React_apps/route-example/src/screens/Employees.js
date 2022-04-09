import { employeeService } from '../services/employeeService';
import { Link } from 'react-router-dom';

function Employees() {
  return (<div>
    
    {employeeService.map(employee => {
      return (
        <article key={employee.id}>
            <h2><Link to={`/employees/${employee.id}`}>{ employee.name }</Link></h2>
            <p>{ employee.positon }</p>
            
        </article>
    )
    })}

  </div>)
}

export default Employees;