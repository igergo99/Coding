import Listcomponent from './components/Listcomponent';
import './App.css';
import TicTacToe from './components/TicTacToe';
import{useState}from 'react'
import Header from './components/Header';
function App() {
const[user, setUser]=useState('X')
const[winner, setWinner]=useState('')

  return (
    <div className="App">
      {/* <Listcomponent array={['Batman','Superman','Wonder women']} /> */}
      <Header winner={winner} user={user}/>
      <TicTacToe winner={winner} setWinnerCb={(winner)=>{setWinner(winner)}} user={user} parentCallback={(user)=>{setUser(user)}}/>
    </div>
  );
}

export default App;
