import { useState } from 'react'
import './Navbar.css'
import { NavbarItems } from './NavbarItems'

import logo from '../../images/logo.png'

import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState({ clicked: false })

    const handleClick = () => {
        setMenu({ clicked: !menu.clicked })
    }

    return (
        <nav className='top-navbar'>
            <img className="navbar-logo" src={logo} alt="logo-Joanna" />
            <div className='menu-icon' onClick={handleClick}>
                <i className={menu.clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={menu.clicked ? 'nav-menu active' : 'nav-menu'}>
                {NavbarItems.map(({ title, url, cName }, index) => {
                    return (
                        <li key={index}>
                            <Link className={cName} to={url} smooth={true} duration={1000}>
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
