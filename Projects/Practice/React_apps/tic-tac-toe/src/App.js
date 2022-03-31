import Listcomponent from './components/Listcomponent';
import './App.css';
import TicTacToe from './components/TicTacToe';
import{useState, useEffect}from 'react'
import Header from './components/Header';
import Inputs from './components/Inputs';
import {Pie} from './components/Pie';

function App() {
const[user, setUser]=useState('X')
const[winner, setWinner]=useState('')
const [result, setResult] = useState({
  O: 0,
  X: 0,
});

// Amikor uj nyertes van vagy draw akkor frissiti a localStorage-t illetve a result state-t is
useEffect(() => {
  console.log('winner', winner)
  /* if (!winner) {
  } */
  if (winner !== '' && winner !== null) {

    let result;
    try {
      result = JSON.parse(localStorage.getItem('result'))
    } catch (error) {
      console.log(error)
    }

    if (!result) {
      result = {
        O: 0,
        X: 0,
      }
    }

    result[winner] += 1;

    localStorage.setItem('result', JSON.stringify(result));
    setResult(result)
  }
},[winner])

// Componens letrejottekor betolti a localStoragebol a result-ot
useEffect(() => {

  let result;
  try {
    result = JSON.parse(localStorage.getItem('result'))
  } catch (error) {
    console.log(error)
  }

  if (!result) {
    result = {
      O: 0,
      X: 0,
    }
  }
  setResult(result)
}, [])
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
    "value": result?.X,
    "color": "hsl(249, 70%, 50%)"
  },
  {
    "id": "O",
    "label": "O",
    "value": result?.O,
    "color": "hsl(288, 70%, 50%)"
  },
  
]}/>
      </div>
      
    </div>
  );
}

export default App;
