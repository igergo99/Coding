import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slider from './components/Slider';
function App() {
  return (
    <div className="App">

      <Slider images={['https://www.w3schools.com/howto/img_mountains_wide.jpg','https://www.w3schools.com/howto/img_nature_wide.jpg','https://www.w3schools.com/howto/img_snow_wide.jpg','https://www.w3schools.com/howto/img_lights_wide.jpg']} defaultIndex={0}/>
      
    </div>
  );
}

export default App;
