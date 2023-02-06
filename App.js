import Navbarcomponent from './components/Navbarcomponents';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Admission from './components/Admission';
import About from './components/About';
import Courses from './components/Courses';
import Notice from './components/Notice';
import Studentform from './components/Studentform';
import Admin from './components/Admin';
import Loginform from './components/Loginform';
import Addform from './components/Addform';
import Viewform from './components/Viewform';
import React, { useState } from 'react';
import Edituser from './components/Edituser';
function App() {
 
  return (
    <div>
      <Navbarcomponent />
      <Routes> 
        <Route path='/about' element={<About />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/studentform' element={<Studentform />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/loginform' element={<Loginform/>}/>
        <Route path='/addform' element={<Addform/>}/>
        <Route path='/viewform' element={<Viewform/>}/>
        <Route path='/editform/:id' element={<Edituser/>}/>
      </Routes>

       

 
    </div>
  );
}

export default App;
