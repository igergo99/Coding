
import './App.css';
import{createUser}from './services/crud'
import {useEffect} from 'react'
import UserEdit from './components/UserEdit';
function App() {
 /*  useEffect(()=>{
    createUser({
      email:"alsdfasdg",
      username:"alsdfasdg",
      name:"alsdfasdg",
      gender:"alsdfasdg"
    })
    .then(response=>console.log(response))
    .catch(e=>console.log(e))
  },[]) */
  return (
    <div className="App">
      <UserEdit />
    </div>
  );
}

export default App;
