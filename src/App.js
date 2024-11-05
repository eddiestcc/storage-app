import {createContext, React, useState} from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Signin from './Pages/Signin/Signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Rental from './Pages/Rental/Rental';
import Units from './Pages/Units/Units';
import Retail from './Pages/Retail/Retail';
import './app.css'
import Account from './Pages/Account/Account';
import { fakeAuth } from './utils';
import Nav from './Pages/Nav/Nav';
import ProtectedRoute from './Pages/ProtectedRoute';

export const AuthContext = createContext(null);

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);
  const signIn = async () => {
      console.log('attempting signin');
      const apiToken = await fakeAuth();
      setToken(apiToken);
      const origin = location.state?.from?.pathname || '/dashboard'
      navigate(origin);
    }

  const signOut = () => {
    setToken(null);
  }

  console.log(token);

  return (
    <AuthContext.Provider value={token}>
      <div className='w-full' >
        <Nav  signOut={signOut} />
        <Routes>
          <Route index element={<Signin signIn={signIn} />}/>
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
