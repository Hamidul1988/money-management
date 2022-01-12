import React from 'react'
import '../App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../pages/Home';
import Login from '../pages/login';
import Register from '../pages/Register';


function App() {


  return (
    
  <Router>
    <div className=" container">
      
      <Routes>
      <Route path='/' exact element={<Home/>}  />
      <Route  path='/login'  element={<Login/>}  />
      <Route  path='/Register'  element={<Register/>}  />
       </Routes>
   
        </div>
    
    </Router>
    )

     }


export default App;
