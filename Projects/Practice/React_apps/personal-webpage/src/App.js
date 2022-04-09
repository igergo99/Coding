import{NavLink,Route,Routes}from 'react-router-dom'
import './App.css';
import AboutMeScreen from './screens/AboutMeScreen';
import {KnowledgeScreen} from './screens/KnowledgeScreen';
import KnowledgeScreenItem from './screens/KnowledgeScreenItem'
import {ReferencesScreen} from './screens/ReferencesScreen';
import ReferenceScreenItem from './screens/ReferenceScreenItem'
import PriceScreen from './screens/PriceScreen';
import BlogScreen from './screens/BlogScreen';
import BlogScreenItem from './screens/BlogScreenItem';
import{ useState}from 'react'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
function App() {
 
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li><NavLink to="/aboutme">Rólam</NavLink></li>
          <li><NavLink to="/knowledge">Szaktudás</NavLink></li>
          <li><NavLink to="/references">References</NavLink></li>
          <li><NavLink to="/prices">Árak</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/signin">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
          
        </ul>

      </div>
      <Routes>
        <Route path='/' element={<AboutMeScreen/>}/>
        <Route path='/aboutme' element={<AboutMeScreen/>}/>
        <Route path="/knowledge" element={<KnowledgeScreen/>}/>
        <Route path="/knowledge/:id" element={<KnowledgeScreenItem/>}/>
        <Route path="/references" element={<ReferencesScreen/>}/>
        <Route path="/references/:id" element={<ReferenceScreenItem/>}/>
        <Route path="/prices" element={<PriceScreen/>}/>
        <Route path="/blog" element={<BlogScreen/>}/>
        <Route path="/blog/:id" element={<BlogScreenItem />}/>
        <Route path="/signin" element={<SignInScreen/>}/>
        <Route path="/signup" element={<SignUpScreen/>}/>
   
      </Routes>
    </div>
  );
}

export default App;
