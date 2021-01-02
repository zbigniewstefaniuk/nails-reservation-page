import React from 'react'
import './Navbar.css'
import { NavbarItems } from './NavbarItems'

import logo from '../../images/logo.png'

function Navbar() {
    const [menu, setMenu] = React.useState({ clicked: false })

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
                            <a className={cName} href={url}>
                                {title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
