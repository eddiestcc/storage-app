import {React} from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
import Rental from './Components/Rental/Rental';
import Units from './Components/Units/Units';
import Search from './Components/Search/Search';
import Retail from './Components/Retail/Retail';
import './app.css'


function App() {

 
  return (
    <div>
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
