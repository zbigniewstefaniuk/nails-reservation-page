import { useState } from 'react'
import './Navbar.css'
import { NavbarItems } from './NavbarItems'

import { Link } from "react-scroll"

function Navbar() {
    const [menu, setMenu] = useState({ clicked: false })

    const handleClick = () => {
        setMenu({ clicked: !menu.clicked })
    }

    return (
        <nav className='top-navbar'>
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
