import { Routes, Route, Link, NavLink, useLocation, Navigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import './App.css';

import Navbar from './components/Navbar';
import AboutScreen from './views/AboutScreen';
import ProficiencyScreen from './views/ProficiencyScreen';
import ReferenceScreen from './views/ReferenceScreen';
import BlogScreen from './views/BlogScreen';

import Stack from './components/proficiency/Stack';
import Reference from './components/reference/Reference';
import BlogPost from './components/blog/BlogPost';
import Login from './components/Login'
import MainLayout from './layouts/MainLayout';
import PasswordReset from './components/PasswordReset';
import LoginLayout from './layouts/LoginLayout';
import ProfileLayout from './layouts/ProfileLayout';
import Profile from './components/Profile';

import{auth} from './config/firebase'
import{onAuthStateChanged} from 'firebase/auth'
function App() {
  const[userLogged, setUserLogged]=useState(false)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log(user)
      if(user){
        setUserLogged(true)
      }else{
        setUserLogged(false)
      }
    })
  },[])
  return (
    <div className="App">
            <Routes>
                <Route element={<MainLayout/>}>
                  <Route path='/' element={ <AboutScreen /> }/>
                  <Route path='/about' element={ <AboutScreen /> }/>
                  <Route path='/proficiency' element={ <ProficiencyScreen /> }/>
                  <Route path='/proficiency/:stack_id' element={ <Stack /> }/>
                  <Route path='/reference' element={ <ReferenceScreen /> }/>
                  <Route path='/reference/:reference_id' element={ <Reference /> }/>
                  <Route path='/blogposts' element={ <BlogScreen /> }/>
                  <Route path='/blogposts/:blog_id' element={ <BlogPost /> }/>
                </Route>
                <Route element={<LoginLayout/>}>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/passwordreset" element={<PasswordReset/>}/>
                </Route>
                {userLogged&&
                
                  <Route element={<ProfileLayout setUserLogged={setUserLogged}/>}>
                  <Route path="/profile" element={<Profile/>}/>
                  
                 
                </Route>}
                {/* <Route path='/prices' element={ <PricesScreen /> }/>
                <Route path='/contact' element={ <ContactScreen /> }/>
                <Route path='/registration' element={ <RegistrationScreen /> }/>
                <Route path='/signin' element={ <SignInScreen /> }/> */}
            </Routes>
    </div>
  );
}

export default App;
