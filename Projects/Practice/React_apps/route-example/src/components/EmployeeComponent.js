import { useParams } from 'react-router-dom';
import { employeeService } from '../services/employeeService';

function EmployeeComponent() {

  const { emp_id } = useParams();
 

  const employee = employeeService.filter(employee => employee.id === emp_id)
 
  return (<div>
    {employee[0] && <>
    <h2>{ employee[0].name }</h2>
    <p>{ employee[0].positon }</p>
    {`Ez itt ${employee[0].name} adatlapja`}
    </>}
  </div>)
}

export default EmployeeComponent;