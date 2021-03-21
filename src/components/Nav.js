import React from "react"
import { useState } from "react"
import "./Nav.css"

function Nav() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    click ? setClick(false) : setClick(true)
  }

  return (
    <nav className={`navbar ${click ? "show-nav" : "hide-nav"}`}>
      <div className="navbar__logo">Logo</div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1 ">
          <a href="/" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideInDown-2 ">
          <a href="/" className="navbar__link">
            Portfolio
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/" className="navbar__link">
            Services
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="/" className="navbar__link">
            A propos
          </a>
        </li>
        <li className="navbar__item slideInDown-5">
          <a href="/" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleClick}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default Nav
