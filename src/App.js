import {React} from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Containers/Signin/Signin';
import Dashboard from './Containers/Dashboard/Dashboard';
import Rental from './Containers/Rental/Rental';
import Units from './Containers/Units/Units';
import Search from './Containers/Search/Search';
import Retail from './Containers/Retail/Retail';
import './app.css'


function App() { 
  return (
    <div >
      <Routes>
        <Route path="/" element={<Signin />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/rental" element={<Rental />}/>
        <Route path="/units" element={<Units />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/retail" element={<Retail />}/>
      </Routes>
  </div>
  );
}

export default App;
