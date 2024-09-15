import logo from '../../logo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="list pl0">
            <div>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <div className="button">
                <NavLink  to="/dashboard" 
                className={({ isActive }) => {
                return isActive ? "no-decoration" : "no-decoration";
                }}
                > Dashboard</NavLink>
            </div>
            <div className="button">
                <NavLink to="/rental"
                className={({ isActive }) => {
                return isActive ? "no-decoration" : "no-decoration";
                }}
                >New Rental</NavLink>
            </div>
            <div className="button">
                <NavLink to="/units"
                className={({ isActive }) => {
                return isActive ? "no-decoration" : "no-decoration";
                }}
                >Units</NavLink>
            </div>
            <div className="button">
                <NavLink to="/search"
                className={({ isActive }) => {
                return isActive ? "no-decoration" : "no-decoration";
                }}
                >Search</NavLink>
            </div>
            <div className="button">
                <NavLink to="/retail"
                className={({ isActive }) => {
                return isActive ? "no-decoration" : "no-decoration";
                }}
                >Retail</NavLink>
            </div>
            <div className="button">
                <NavLink to="/"
                className={({ isActive }) => {
                return isActive ? "no-decoration" : "no-decoration";
                }}
                > Logout</NavLink>
            </div>
        </nav>
    )
}

export default Nav;