import logo from '../../logo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        // NEW
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
                <ul className="menu bg-base-200 text-base-content min-h-full p-20">
                {/* Sidebar content here */} 
                <div className='flex justify-center padding-below'>
                   <img className="w-36 rounded-full" alt='logo' src={logo}></img>
                 </div>
                <div>
                    <NavLink className="text-4xl text-4xl btn btn-block nav-button" to="/dashboard" > 
                    {/* BUTTON TITLE HERE  */}
                    Dashboard
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className="text-4xl  btn btn-block nav-button" to="/rental" > 
                    {/* BUTTON TITLE HERE  */}
                    New Rental
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className="text-4xl btn btn-block nav-button" to="/units" > 
                    {/* BUTTON TITLE HERE  */}
                    Units
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className="text-4xl  btn btn-block nav-button" to="/search" > 
                    {/* BUTTON TITLE HERE  */}
                    Search
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className=" text-4xl btn btn-block nav-button" to="/retail" > 
                    {/* BUTTON TITLE HERE  */}
                    Retail
                    </NavLink>
                 </div>
                 <div>
                    <NavLink className="text-4xl btn btn-block nav-button" to="/" > 
                    {/* BUTTON TITLE HERE  */}
                    Logout
                    </NavLink>
                 </div>
                </ul>
            </div>
        </div>

        // OLD
        // <nav className="list pl0">
        //     <div>
        //         <img className='logo-radius' src={logo} alt='logo'></img>
        //         <button className='btn'> hello </button>
        //     </div>
        //     <div>
        //         <NavLink 
        //         to="/dashboard" 
        //         className={({ isActive }) => {
        //         return isActive ? "nav-button" : "nav-button";
        //         }}
        //         > Dashboard</NavLink>
        //     </div>
        //     <div>
        //         <NavLink 
        //         to="/rental"
        //         className={({ isActive }) => {
        //         return isActive ? "nav-button" : "nav-button";
        //         }}
        //         >New Rental</NavLink>
        //     </div>
        //     <div>
        //         <NavLink 
        //         to="/units"
        //         className={({ isActive }) => {
        //         return isActive ? "nav-button" : "nav-button";
        //         }}
        //         >Units</NavLink>
        //     </div>
        //     <div>
        //         <NavLink 
        //         to="/search"
        //         className={({ isActive }) => {
        //         return isActive ? "nav-button" : "nav-button";
        //         }}
        //         >Search</NavLink>
        //     </div>
        //     <div>
        //         <NavLink 
        //         to="/retail"
        //         className={({ isActive }) => {
        //         return isActive ? "nav-button" : "nav-button";
        //         }}
        //         >Retail</NavLink>
        //     </div>
        //     <div>
        //         <NavLink 
        //         to="/"
        //         className={({ isActive }) => {
        //         return isActive ? "nav-button" : "nav-button";
        //         }}
        //         // onClick={changeRoute({route: 'signin'})}
        //         > Logout</NavLink>
        //     </div>
        // </nav>
    )
}

export default Nav;