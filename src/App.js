import {createContext, React, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './Pages/Signin/Signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Rental from './Pages/Rental/Rental';
import Units from './Pages/Units/Units';
import Retail from './Pages/Retail/Retail';
import './app.css'
import Account from './Pages/Account/Account';
import { fakeAuth } from './utils';
import Nav from './Pages/Nav/Nav';

export const AuthContext = createContext(null);

function App() {
 
  const [authToken, setAuthToken] = useState(null);

  const signIn = () => {
      console.log('attempting signin');
      const token = fakeAuth();
      setAuthToken(token);
    }

  const signOut = () => {
    setAuthToken(null);
  }

  console.log(authToken);

  return (
    <AuthContext.Provider value={authToken}>
      <div className='w-full' >
        <Nav signOut={signOut} />
        <Routes>
          <Route path="/" element={<Signin signIn={signIn} />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/rental" element={<Rental />}/>
          <Route path="/units" element={<Units />}/>
          <Route path="/retail" element={<Retail />}/>
          <Route path="/account" element={<Account />}/>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
