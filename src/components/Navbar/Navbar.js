import { useState } from "react"
import { Link } from "react-scroll"
import { Link as LinkRoute } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import "./Navbar.css"

import { NavbarItems } from "./NavbarItems"

function Navbar() {
  const [menu, setMenu] = useState({ clicked: false })

  const handleClick = () => {
    setMenu({ clicked: !menu.clicked })
  }

  return (
    <nav className="top-navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className={menu.clicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={menu.clicked ? "nav-menu active" : "nav-menu"}>
        {NavbarItems.map(({ title, url, cName }, index) => {
          return (
            <li key={index}>
              <LinkRoute to={url} onClick={handleClick}>
                <HashLink
                  className={cName}
                  to={url}
                  smooth={true}
                  duration={1000}
                  onClick={handleClick}>
                  {title}
                </HashLink>
              </LinkRoute>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
