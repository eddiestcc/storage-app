import { useContext } from 'react';
import logo from '../../logo.png'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../App';

const Nav = ({setToken}) => {
   
    const token = useContext(AuthContext);

    const signOut = () => {
      setToken(null);
    }

    return(
      <div id='nav' className='flex'>
         {/* Menu Drawer */}
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="text-base-100 h-5 w-5"
                     fill="none"
                     viewBox="0 0 36"
                     stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                     </svg>
                  </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full p-20 rounded-r-2xl">
                {/* Sidebar content here */} 
                <div className='flex justify-center'>
                   <img className="w-36 rounded-full" alt='logo' src={logo}></img>
                 </div>
                <div>
                    <NavLink className="flex content-center text-4xl text-4xl btn btn-block pt-24 p-11 pb-16" to="/dashboard" > 
                    {/* BUTTON TITLE HERE  */}
                    Dashboard
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className="flex content-center text-4xl  btn btn-block p-11 pb-16" to="/rental" > 
                    {/* BUTTON TITLE HERE  */}
                    Rental
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className="flex content-center text-4xl btn btn-block p-11 pb-16" to="/units" > 
                    {/* BUTTON TITLE HERE  */}
                    Units
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className=" flex content-center text-4xl btn btn-block p-11 pb-16" to="/retail" > 
                    {/* BUTTON TITLE HERE  */}
                    Retail
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className="flex content-center text-4xl btn btn-block p-11 pb-16" to="/" > 
                    {/* BUTTON TITLE HERE  */}
                    Logout
                    </NavLink>
                 </div>
                </ul>
            </div>
        </div>
        {/* Sign Out Button */}
        {token && <span onClick={signOut} className='flex justify-end'>
            <NavLink className="btn btn-ghost" to="/" >
                  <svg className="h-8 w-8 text-base-100"  
                  width="24" height="24" viewBox="0 0 24 24"
                  strokeWidth="2" stroke="currentColor" fill="none" 
                  strokeLinecap="round" strokeLinejoin="round">  
                  <path stroke="none" d="M0 0h24v24H0z"/>  
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                  {/* BUTTON TITLE HERE  */} 
                  <h1 className='font-large text-base-100'>Sign Out</h1>
            </NavLink>
         </span>}
      </div>
    )
}

export default Nav;