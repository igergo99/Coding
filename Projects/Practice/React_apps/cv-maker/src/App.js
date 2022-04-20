import './App.css';
import MainLayout from './layouts/MainLayout';
import { Routes, Route, Navigate,Outlet} from 'react-router-dom';
import CvMakerView from './views/CvMakerView';
import CvListView from './views/CvListView';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/cvmaker" element={<CvMakerView/>}/>
          <Route path="/cvs" element={<CvListView/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
