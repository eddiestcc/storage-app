import {React} from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Pages/Signin/Signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Rental from './Pages/Rental/Rental';
import Units from './Pages/Units/Units';
import Retail from './Pages/Retail/Retail';
import './app.css'
import Account from './Pages/Account/Account';


function App() { 
  return (
    <div className='w-full' >
      <Routes>
        <Route path="/" element={<Signin />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/rental" element={<Rental />}/>
        <Route path="/units" element={<Units />}/>
        <Route path="/retail" element={<Retail />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
  </div>
  );
}

export default App;
