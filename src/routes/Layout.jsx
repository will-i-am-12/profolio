import { Outlet,Link } from "react-router-dom"
import './Layout.css'
const Layout =()=>
{
    return(
        <div className="layout">
            <header>
                <div className="header-text"> 
                    William Lu
                </div>
                <nav className="nav-bar">
                    <div className="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/resume'>Resume</Link></li>
                        <li><Link to='/contact'>Contact Me</Link></li>
                    </ul>
                </nav>
            </header>
            
            <Outlet/>
        </div>
    )

}
export default Layout