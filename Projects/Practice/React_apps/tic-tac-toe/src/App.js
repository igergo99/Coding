import Listcomponent from './components/Listcomponent';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      {/* <Listcomponent array={['Batman','Superman','Wonder women']} /> */}
      <TicTacToe />
    </div>
  );
}

export default App;
