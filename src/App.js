import {React, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
import Nav from './Components/Nav/Nav';
import Rental from './Components/Rental/Rental';
import Units from './Components/Units/Units';
import Search from './Components/Search/Search';
import Retail from './Components/Retail/Retail';
import './CSS/App.css'


function App() {

    return (
      // <div className="App">
      //    <div className="wrapper">
      //       <div className="sidebar">
      //       <Nav />
      //       </div>
      //       <div className="main">
      //       <Signin  />
      //       </div>
      //   </div>
      // </div>
      <>
        <div className='App'>
          <div className='wrapper'>
            <div className='sidebar'>
                <Nav />
              </div>
              <div className='main'>
                <Routes>
                  <Route path="/" element={<Signin />}/>
                  <Route path="/dashboard" element={<Dashboard />}/>
                  <Route path="/rental" element={<Rental />}/>
                </Routes>
              </div>
            </div>
          </div>
      </>
      )
}

export default App;
