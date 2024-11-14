import {createContext, React, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Pages/Signin/Signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Rental from './Pages/Rental/Rental';
import Units from './Pages/Units/Units';
import Retail from './Pages/Retail/Retail';
import './app.css'
import Account from './Pages/Account/Account';
import Nav from './Pages/Nav/Nav';
import ProtectedRoute from './Pages/ProtectedRoute';

export const AuthContext = createContext(null);

function App() {

  const [token, setToken] = useState(null);


  return (
    <AuthContext.Provider value={token}>
      <div className='w-full' >
        <Nav setToken={setToken}/>
        <Routes>
          <Route index element={<Signin setToken={setToken} />}/>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
            <Route path="/rental" element={<ProtectedRoute><Rental /></ProtectedRoute>}/>
            <Route path="/units" element={<ProtectedRoute><Units /></ProtectedRoute>}/>
            <Route path="/retail" element={<ProtectedRoute><Retail /></ProtectedRoute>}/>
            <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>}/>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
