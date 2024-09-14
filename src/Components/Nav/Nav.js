import logo from '../../logo.png'

const Nav = () => {
    return(
        <nav className="list pl0">
            <div>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <div className="button">
                <li>Dashboard</li>
            </div>
            <div className="button">
                <li>New Rental</li>
            </div>
            <div className="button">
                <li>Units</li>
            </div>
            <div className="button">
                <li>Search</li>
            </div>
            <div className="button">
                <li>Retail</li>
            </div>
        </nav>
    )
}

export default Nav;