import React from 'react'

import logo from '../../images/logo.png'

function Navbar() {
    return (
        <div className='top-navbar'>
            <img className="logo" src={logo} alt="logo-Joanna" />
            <div className='navbar-links'>
                <a href='#'>Cennik</a>
                <a href='#'>Umów się</a>
                <a href='#'>Kontakt</a>
            </div>
        </div>
    )
}

export default Navbar
