import {React, useState} from 'react';
import Signin from './Components/Signin/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
import Nav from './Components/Nav/Nav';
import Rental from './Components/Rental/Rental';
import Units from './Components/Units/Units';
import Search from './Components/Search/Search';
import Retail from './Components/Retail/Retail';
import './CSS/App.css'

// function RouteComponent() {
//   const routeChange = {
//     route: "signin"
//   }
//   const [route, setRoute] = useState('signin');
// }



function App() {

  const setRoute = 'signin';

    // SIGN IN ROUTE 
    return setRoute === 'signin' ? (
      <div className="App">
         <div className="wrapper">
            <div className="sidebar">
            <Nav />
            </div>
            <div className="main">
            <Signin  />
            </div>
        </div>
      </div>
    )
    // DASHBOARD ROUTE 
    : setRoute === 'dashboard' ? (
      <div className="App">
         <div className="wrapper">
            <div className="sidebar">
            <Nav />
            </div>
            <div className="main">
            <Dashboard  />
            </div>
        </div>
      </div>
    )
    // RENTAL ROUTE 
    : (
      <div className="App">
         <div className="wrapper">
            <div className="sidebar">
            <Nav />
            </div>
            <div className="main">
            <Rental  />
            </div>
        </div>
      </div>
    )
}

export default App;
