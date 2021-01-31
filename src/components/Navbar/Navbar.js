import { useState } from 'react'
import { Link } from "react-scroll"
import { Link as LinkRoute } from "react-router-dom"

import './Navbar.css'

import { NavbarItems } from './NavbarItems'
import Galery from '../../routes/Galery'

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
                    if (url === '/galery') {
                        return (
                            <li key={index}>
                                <LinkRoute to={url} >
                                    {title}
                                </LinkRoute>
                            </li>
                        )
                    } else {
                        return (
                            <li key={index}>
                                <LinkRoute to={url} >
                                    <Link className={cName} to={url} smooth={true} duration={1000}>
                                        {title}
                                    </Link>
                                </LinkRoute>
                            </li>
                        )
                    }
                })}
            </ul>
        </nav>
    )
}

export default Navbar
