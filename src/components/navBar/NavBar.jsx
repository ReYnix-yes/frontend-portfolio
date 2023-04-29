import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function NavBar() {
    return (
        <nav className="navbar">
            <Link className="link__container" id="main__link" to="/"><li className="nav__links" id="main__link">Grinkevich</li></Link>
            <div className="nav__links__container">
                <Link className="link__container"><li className="nav__links">Contact</li></Link>
                <Link className="link__container"><li className="nav__links">About</li></Link>
                <Link className="link__container" to="/Gallery"><li className="nav__links">Gallery</li></Link>
            </div>
        </nav>
    )
}

export default NavBar;