import React from 'react';
import Signin from './Components/Signin/Signin';
import Nav from './Components/Nav/Nav';
import Rental from './Components/Rental/Rental';
import Units from './Components/Units/Units';
import Search from './Components/Search/Search';
import Retail from './Components/Retail/Retail';
import './CSS/App.css'


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="sidebar">
          <Nav />
        </div>
        <div className="main">
          {/* <Signin  /> */}
          <Rental />
          {/* <Units />
          <Search />
          <Retail /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
