import Listcomponent from './components/Listcomponent';
import './App.css';
import TicTacToe from './components/TicTacToe';
import{useState}from 'react'
import Header from './components/Header';
import Inputs from './components/Inputs';
import {Pie} from './components/Pie';
function App() {
const[user, setUser]=useState('X')
const[winner, setWinner]=useState('')

  return (
    <div className="App">
      {/* <Listcomponent array={['Batman','Superman','Wonder women']} /> */}
      <Header winner={winner} user={user}/>
      <TicTacToe winner={winner} setWinnerCb={(winner)=>{setWinner(winner)}} user={user} parentCallback={(user)=>{setUser(user)}}/>
      <Inputs />
      <div className="pie-container">
      <Pie data={[
  {
    "id": "X",
    "label": "X",
    "value": 24,
    "color": "hsl(249, 70%, 50%)"
  },
  {
    "id": "O",
    "label": "O",
    "value": 166,
    "color": "hsl(288, 70%, 50%)"
  },
  
]}/>
      </div>
      
    </div>
  );
}

export default App;
