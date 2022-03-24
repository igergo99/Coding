import logo from './logo.svg';
import './App.css';
import CreateStates from './components/CreateStates';
import ImgShow from './components/states/ImgShow';
import Form from './components/states/Form';
function App() {
  return (
    <div className="App">
      <CreateStates />
      <ImgShow />
      <Form />
    </div>
  );
}

export default App;
